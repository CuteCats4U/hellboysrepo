import * as Sentry from '@sentry/node'

export default async (req, res) => {
  try {
    let obj = {};
    obj.doesNotExist();
    res.send('Success');
  } catch (error) {
    Sentry.captureException(error);
    await Sentry.flush(2000);
    res.status(500).send("Something broke");
  }
};