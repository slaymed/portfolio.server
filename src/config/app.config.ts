import { toNumber } from 'src/common/utils/transformer.util';

export function appConfig() {
  return {
    port: toNumber(process.env.PORT),
    envirement: process.env.NODE_ENV,
    mailer: {
      host: process.env.MAILER_HOST,
      port: toNumber(process.env.MAILER_PORT),
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
    origin: process.env.ORIGIN,
  };
}
