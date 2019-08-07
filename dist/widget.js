const baseUrl = "http://localhost:5000";

window.PPWidget = zoid.create({
  tag: "ppwidget-component",
  url: `${baseUrl}/index.html`,
  defaultContext: "popup",
  dimensions: {
    width: "350px",
    height: "568px"
  },
  autoResize: {
    width: true,
    height: true
  }
});
