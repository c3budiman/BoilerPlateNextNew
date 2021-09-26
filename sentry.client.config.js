import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: "https://d69bbd115fcd4cf783fa247996fddd49@o1014390.ingest.sentry.io/5979591",
  tracesSampleRate: 1.0,
});
