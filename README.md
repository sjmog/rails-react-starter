# Rails React Starter

The Base app with:

- Rails
- PostgreSQL
- React
- Devise (for users)

Routing is mostly handled by React-Router (except login/logout). Rails is optimised for API stuff.

### Getting Started

- `bundle install`
- `yarn install`
- `bin/rails db:create`
- `bin/rails db:migrate`
- `bin/rails db:seed` (also creates a user, `user@example.com` with password `password`)
- `bin/rails s`

(Optional: run `./bin/webpack-dev-server` to speed up JavaScript recompilation)
