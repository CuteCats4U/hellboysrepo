import * as Sentry from '@sentry/node'

export default async (req, res) => {
  res.status(500).json({
  });
  if (res.statusCode === 500) {
    Sentry.captureMessage(res.statusMessage, 'fatal')
    await Sentry.flush(2000);
  }
};