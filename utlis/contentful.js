const contentful = require("contentful");

const defaultConfig = {
  CTF_SPACE_ID: "cyw2xslrqtl8",
  CTF_CDA_TOKEN:
    "d3374136a763a0a8bac93171fc3894420fd422f387f4c11a246dd431a41f4109",
  CTF_CPA_TOKEN:
    "96bf41796f6b93004369f4a5792afc51ed1b25f7565846a6233cfcb7834d02b3"
};

const createClient = (config = defaultConfig) => {
  const options = {
    host: "preview.contentful.com",
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CPA_TOKEN
  };

  if (process.env.NODE_ENV === "production" && !process.env.STAGING) {
    options.host = "cdn.contentful.com";
    options.accessToken = config.CTF_CDA_TOKEN;
  }

  return contentful.createClient(options);
};

const getEntry = async item => {
  let entryNumber = 0;
  const client = createClient();
  const pageEntries = await client.getEntries();
  for (let i = 0; i < pageEntries.items.length; i++) {
    if (pageEntries.items[i].sys.contentType.sys.id === item) entryNumber = i;
  }
  const pageInfo = await client.getEntry(pageEntries.items[entryNumber].sys.id);
  return pageInfo;
};

export default getEntry;
