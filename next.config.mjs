const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/AlgoCrack' : '',
  assetPrefix: isProd ? '/AlgoCrack/' : '',
  trailingSlash: true, // Optional: ensures URLs have trailing slashes
};
