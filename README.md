# Rails React Starter

The Base app with:

- Rails
- PostgreSQL
- React
- Devise (for users)

Routing is mostly handled by React-Router (except login/logout). Rails is optimised for API stuff.

### Getting Started

- Change the application name in:
  - config/database.yml
  - config/application.rb
  - config/environments/production.rb
  - app/views/layouts/application.html.erb
- Set the new origin remote to a new repo (e.g. `git remote set-url origin https://github.com/sjmog/repo-name`)
- Update this README with the application name.
- `bundle install`
- `yarn install`
- `bin/rails db:create`
- `bin/rails db:migrate`
- `bin/rails db:seed` (also creates a user, `user@example.com` with password `password`)
- `bin/rails s`

(Optional: run `./bin/webpack-dev-server` to speed up JavaScript recompilation)
