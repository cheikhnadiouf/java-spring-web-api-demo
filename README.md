A full working Spring/Angular demo app (monolithic architecture), exhaustive examples of common web services that we can made with this great yeoman generator Jhipster including Spring (as backend framework), Angular(as frontend framework), Bootstrap (as UI/theme framework), MySQL or H2 (as DataBase) and much more features.

Additional reference for jhipster : http://www.jhipster.tech

#### How to install JHIPSTER ?
Local installation with NPM (alternative to Yarn)
Quick setup when using Angular

    1- Install Java 8 from the Oracle website.
    2- Install Node.js from the Node.js website (prefer an LTS version)
    3- Install NPM from the Npm website
    4- If you want to use the JHipster Marketplace, install Yeoman: npm install -g yo
    5- Install JHipster: npm install -g generator-jhipster

Now that JHipster is installed, you can also create your own application by running this command line : jhipster

#### How to regenerate your application ?
	 customize file .yo-rc.json
	 then 'yo jhipster'


#### How to Run JHIPSTER IN DEVELOPMENT MODE ?
Run the following commands in two separate terminals to create a blissful development experience where your browser auto-refreshes when files change on your hard drive.
(By default, yarn listens on port 9000 (webpack + browser sync) to hot reload frontend code and contents, maven or gradle listens on port 8080 to hot reload server code. 
You must run both in dev.)

    ./mvnw or mvnw (or mvn if you have already installed Maven)  // to run java backend server
    yarn start (or, if you use NPM, npm start) // To run frontend client

#### How to Run JHIPSTER IN PRODUCTION MODE ?
To optimize this application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

#### How to create Entities ?
Once you have created your application, you will want to create entities. For example, you might want to create an Author and a Book entity. For each entity, you will need:

    A database table
    A Liquibase change set
    A JPA Entity
    A Spring Data JPA Repository
    A Spring MVC REST Controller, which has the basic CRUD operations
    An Angular router, a component and a service
    An HTML view
    Integration tests, to validate everything works as expected
    Performance tests, to see if everything works smoothly

If you have several entities, you will likely want to have relationships between them. For this, you will need:
    A database foreign key
    Specific JavaScript and HTML code for managing this relationship

The “entity” sub-generator will create all the necessary files, and provide a CRUD front-end for each entity (see project structure). 
The sub generator can be invoked by running jhipster entity <entityName> --[options]. Reference for those options can be found by typing jhipster entity --help

See more informations and tools here : http://www.jhipster.tech/creating-an-entity/


# JHIPSTER
This application was generated using JHipster 4.11.0, you can find documentation and help at [http://www.jhipster.tech/documentation-archive/v4.11.0](http://www.jhipster.tech/documentation-archive/v4.11.0).

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.


Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Service workers

Service workers are commented by default, to enable them please uncomment the following code.

* The service worker registering script in index.html
```
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./sw.js')
        .then(function() { console.log('Service Worker Registered'); });
    }
</script>
```
* The copy file option in webpack-common.js
```js
{ from: './src/main/webapp/sw.js', to: 'sw.js' },
```
Note: Add the respective scripts/assets in `sw.js` that is needed to be cached.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    yarn add --exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    yarn add --dev --exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:
~~~
import 'leaflet/dist/leaflet.js';
~~~

Edit [src/main/webapp/content/css/vendor.css](src/main/webapp/content/css/vendor.css) file:
~~~
@import '~leaflet/dist/leaflet.css';
~~~
Note: there are still few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using angular-cli

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

### Doing API-First development using swagger-codegen

[Swagger-Codegen]() is configured for this application. You can generate API code from the `src/main/resources/swagger/api.yml` definition file by running:
```bash
./mvnw generate-sources
```
```bash
./gradlew swagger
```
Then implements the generated interfaces with `@RestController` classes.

To edit the `api.yml` definition file, you can use a tool such as [Swagger-Editor](). Start a local instance of the swagger-editor using docker by running: `docker-compose -f src/main/docker/swagger-editor.yml up -d`. The editor will then be reachable at [http://localhost:7742](http://localhost:7742).

Refer to [Doing API-First development][] for more details.

## Building for production

To optimize the quickandclean application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test

UI end-to-end tests are powered by [Protractor][], which is built on top of WebDriverJS. They're located in [src/test/javascript/e2e](src/test/javascript/e2e)
and can be run by starting Spring Boot in one terminal (`./mvnw spring-boot:run`) and running the tests (`yarn run e2e`) in a second one.

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw verify -Pprod dockerfile:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: http://www.jhipster.tech
[JHipster 4.11.0 archive]: http://www.jhipster.tech/documentation-archive/v4.11.0

[Using JHipster in development]: http://www.jhipster.tech/documentation-archive/v4.11.0/development/
[Using Docker and Docker-Compose]: http://www.jhipster.tech/documentation-archive/v4.11.0/docker-compose
[Using JHipster in production]: http://www.jhipster.tech/documentation-archive/v4.11.0/production/
[Running tests page]: http://www.jhipster.tech/documentation-archive/v4.11.0/running-tests/
[Setting up Continuous Integration]: http://www.jhipster.tech/documentation-archive/v4.11.0/setting-up-ci/


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
[Swagger-Codegen]: https://github.com/swagger-api/swagger-codegen
[Swagger-Editor]: http://editor.swagger.io
[Doing API-First development]: http://www.jhipster.tech/documentation-archive/v4.11.0/doing-api-first-development/
