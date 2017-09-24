# PHO DAT PROJECT #

## How to setup the project ##

We use gulp as build tool
source folder for frontend code is root/source and build folder is in template directory
eslint and sass-lint uses airbnb codestyle presets (airbnb base without react).

## Frontend Stack ##

bootstrap: 3.3.7 (https://github.com/twbs/bootstrap-sass),
jquery: 3.1.1 (https://jquery.com),
autoprefixer: 6.7.3 (https://github.com/postcss/autoprefixer),
gulp: 3.9.1 (http://gulpjs.com)
eslint (gulp-eslint): 3.0.1 (https://github.com/adametry/gulp-eslint)
sass-lint (gulp-sass-lint): 1.3.2 (https://github.com/sasstools/gulp-sass-lint)
browsersync (https://www.browsersync.io/docs#installation)

## Testing ##

For javascript unit testing we use mocha as a test framework (https://mochajs.org/) and chai as additional assertion library (http://chaijs.com/) which allows us to write and chain nice BDD assertions. We are testing via testrunner.html file. For testing your code just import the source and test code on defined place in the file and then open it in the browser.
Linting

Linting is the process of running a program that will analyse code for potential errors. We use linters for javascript (eslint) and for sass its (gulp-sass-lint), both are runned via gulp. Eslint configuration is located in .eslintrc in root project folder and sass-lint in .sass-lint.yml in root project folder.