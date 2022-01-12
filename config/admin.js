module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e3407b44ea1b51e0a3c0e4b94b7a5b6'),
  },
});
