import { registerAs } from '@nestjs/config';

import * as PACKAGE_JSON from '../../package.json';

export default registerAs(
  'config',
  () => ({
    project: {
      apiPrefix: process.env.API_PREFIX || 'API-PREFIX',
      name: PACKAGE_JSON.name,
      version: PACKAGE_JSON.version,
      description: PACKAGE_JSON.description,
      author: PACKAGE_JSON.author,
    //   repository: PACKAGE_JSON.repository,
    //   bugs: PACKAGE_JSON.bugs,
    //   homepage: PACKAGE_JSON.homepage,
    },
    server: {
      isProd: process.env.NODE_ENV === 'production',
      port: parseInt(process.env.PORT, 10) || 8080,
      context: process.env.CONTEXT || 'v1',
      origins: process.env.ORIGINS ? process.env.ORIGINS.split(',') : '*',
      allowedHeaders: process.env.ALLOWED_HEADERS,
      allowedMethods: process.env.ALLOWED_METHODS,
      corsEnabled: process.env.CORS_ENABLED.toLowerCase() === 'true',
      corsCredentials: process.env.CORS_CREDENTIALS.toLowerCase() === 'true',
    },
    swagger: {
      path: process.env.SWAGGER_PATH || 'docs',
      enabled: process.env.SWAGGER_ENABLED.toLowerCase() === 'true',
    },
    params: {},
    services: {},
  }),
);