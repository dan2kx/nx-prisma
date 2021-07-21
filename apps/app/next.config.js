const withNx = require("@nrwl/next/plugins/with-nx");

const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals.push("_http_common");
  //     config.externals.push("encoding");
  //     config.module.rules.push({
  //       exclude: [path.resolve(__dirname, "./libs/shared/models/")],
  //     });
  //   }
  //   return config;
  // },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals.unshift(({ context, request }, callback) => {
  //       // Work-around for Prisma "Could not open datamodel file"  error
  //       if (request === "prisma/client") {
  //         return callback(null, `commonjs ${context}`);
  //       }
  //       if (request === "./runtime" && context === context) {
  //         return callback(null, `commonjs ${context}/runtime`);
  //       }
  //       callback();
  //     });
  //   }
  //   return config;
  // },
};

module.exports = withNx(nextConfig);
