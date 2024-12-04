const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: ["placehold.co"],
  },
  basePath: isProd ? "/label-maker" : "",
  assetPrefix: isProd ? "/label-maker/" : "",
};
