var context = require.context('.', true, /__tests__\/.+\.spec\.js$/);
context.keys().forEach(context);
