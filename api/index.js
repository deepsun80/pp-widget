/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);

let API_ROOT = "";

if (process.env.NODE_ENV === "development") {
  API_ROOT = "https://app-staging.paypossible.com/api";
} else if (process.env.NODE_ENV === "production") {
  API_ROOT = "https://app.paypossible.com/api";
}

const responseBody = res => res.body;

let token = null;

const Token = {
  get: () => token,
  set: newToken => {
    token = newToken;
  },
  unSet: () => {
    token = null;
  }
};

const tokenAuth = req => {
  if (token) {
    req.set("authorization", `JWT ${token}`);
  }
};

const refreshToken = (err, res) =>
  new Promise(resolve => {
    if (
      token &&
      err &&
      (err.status === 400 || err.status === 401 || err.status === 403)
    ) {
      Auth.refresh(token).then(() => resolve(true));
    } else {
      resolve(false);
    }
  });

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenAuth)
      .retry(1, refreshToken)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenAuth)
      .retry(1, refreshToken)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenAuth)
      .retry(1, refreshToken)
      .then(responseBody),
  patch: (url, body) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenAuth)
      .retry(1, refreshToken)
      .then(responseBody),
  postToken: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenAuth)
      .retry(1, refreshToken)
      .then(responseBody),
  postNoToken: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const Merchant = {
  search: id => requests.get(`/v1/merchants/search/${id}/`)
};

export default Merchant;
