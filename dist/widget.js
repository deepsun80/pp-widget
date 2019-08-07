const baseUrl = "https://reverent-pare-9d2d6b.netlify.com";

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
