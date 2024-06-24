# NestJS Zurich API

## Features

- [x] Database. Support [TypeORM](https://www.npmjs.com/package/typeorm) and [Mongoose](https://www.npmjs.com/package/mongoose).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer)).
- [x] Sign in and sign up via email.
- [x] Social sign in (Apple, Facebook, Google, Twitter).
- [x] Admin and User roles.
- [x] Internationalization/Translations (I18N) ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- [x] File uploads. Support local and Amazon S3 drivers.
- [x] Swagger.
- [x] E2E and units tests.
- [x] Docker.
- [x] CI (Github Actions).

## Getting Started

1. Go to folder, and copy `env-example-relational` as `.env`.

1. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

1. Install dependency

   ```bash
   npm install
   ```

1. Run app configuration

   > You should run this command only the first time on initialization of your project, all next time skip it.

   > If you want to contribute to the boilerplate, you should NOT run this command.

   ```bash
   npm run app:config
   ```

1. Run migrations

   ```bash
   npm run migration:run
   ```

1. Run seeds

   ```bash
   npm run seed:run:relational
   ```

1. Run app in dev mode

   ```bash
   npm run start:dev
   ```

1. Open <http://localhost:3000/docs#/>

---


## Authentication

1. To authorize yourself as admin, goto http://localhost:3000/docs#/Auth/AuthController_login

   ```bash
   {
    "email": "admin@example.com",
    "password": "secret"
   }
   ```

1. Click "Authorize" button on top of the page and paste the token received from the response.

1. You should able to use admin request now.

1. To authorize yourself as regular users, goto http://localhost:3000/docs#/Auth/AuthController_login

   ```bash
   {
    "email": "john.doe@example.com",
    "password": "secret"
   }
   ```

1. Click "Authorize" button on top of the page and paste the token received from the response.

1. You should able to use regular user request request now.
