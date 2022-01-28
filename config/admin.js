module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1eff6ffdae7f5d38c5416d9236bde9e8'),
  },
});
