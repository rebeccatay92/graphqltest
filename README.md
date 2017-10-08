### How to set up GraphQL with Sequelize and PostgreSQL
------------

### Our most likely tech stack
React, Redux, Apollo?, GraphQL, Sequelize, Postgres

I'm not sure as to the diff between Apollo, Relay or just pure Redux. Seems like they are just abstractions for Redux fetch requests to backend

------------

### Set up express, sequelize and postgres
* npm install `express nodemon pg pg-hstore sequelize sequelize-cli`
* do a `sequelize init` to set up the folder structure. there will be models, migrations, seeders folder
* split the express connection set up from the db connection setup.
* for express connection, i just put it in `app.js` in `root` directory
* database connection, for now i follow the `sequelize init` structure and left it in `index.js` in the `/models` folder.
* P.S. I did this setup manually to understand the import/require flow. i think the auto generated code from sequelize init should work fine too

------------

### Defining models for sequelize/postgres
* For model definition, use capital singular for the model, the instance of the model is lowercase singular.
* In the migration files, the table names in dbeaver will be lowercase plural.
* Eg. `var User = sequelize.define('user', {....})`
* `'user'` is lowercase singular. sequelize will add an `'s'` to this and match it to the `'users'` in the  migration file
* associations work just as in regular sequelize

------------

### Setting up graphql connection with postgres (sorry not organized)
* npm install `graphql, graphql-tools, apollo-server-express`
* graphql needs 3 different types of files.
* 1) schema definitions (diff from sequelize models). the `!` means required field.
* 2) db connection setup (typically named connectors.js)
* 3) resolvers (what to do for different queries)
* Schema definitions are inside `index.js` in the `/schema` folder. `graphql-tools` allows schema definitions to be done in a string format
* Query refers to get requests. Mutations are basically the post/put/patch/delete requests which alter the DB.
* We only expose 1 API endpoint to the frontend in the form of /graphql
* By importing `graphiql`, we can see the GUI (similar to postman but on localhost). this endpoint is `/graphiql`
* In the `resolvers.js` file, this is similar to `controllers` for our proj4. when receiving queries or mutations, we request the postgres database and return info.
