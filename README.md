# EeaPoC

This project was developed as an initial Proof of Concept to study the possibility of migrating the new Web Form applications
to a new web application framework namely Angular 5(+).

## Reasons for choosing Angular

The following are some reasons for choosing Angular 5 as a web framework
### Familiarity

Angular 5 syntax and architecture is different from AngularJS (used in most of the previous Web Forms) but many fundamental concepts
remain the same, especially if the developer has worked with AngularJS 1.5 (or above) using Typescript. This means that the transition from AngularJS
to Angular 5 is smoother for the developer than to a completely different framework.
Also (and this is very important in our case) Typescript is much more familiar to back-end developers (for example Java developers).

### Angular CLI

Using the build-in CLI tool it is very easy and fast to start a new project. 
The project is generated automatically using the CLI which relieves the developer from time consuming tasks involved
to configuring a new project, per environment, configuring a build tool/process etc.

### Maintainability

Angular addresses maintainability mainly with the use of Typescript. Typescript is a strong-typing language (Javascript is not), which allows developers to find bugs and mistakes earlier in the process (before runtime). 
TypeScript also allows developers that are new to a codebase to more quickly get up to speed due to their ability 
to more quickly see the types of data moving through the application.


### Popularity/ Strong community

Angular is one of the most popular front-end frameworks at the moment, backed and supported by Google. 
(see for example [here](https://cdn-images-1.medium.com/max/1200/1*O2sPMfzy07WlVuCrdj662Q.png)). 

This is very important for the following reasons:

* Potential issues in the framework are fixed relatively fast
* The developers can easily find support/code samples online
* Many third-party libraries are developed for Angular (e.g. UI Component libraries like PrimeNG) which facilitates the development of applications

## Architectural decisions

### UI Component library

We decided to use the PrimeNG UI component library for several reasons:

* Speed of development: Using a UI component library speeds-up considerably the time of developing web applications. The alternative
of developing from scratch our own components is not even an option if speed is important.

* Single library for all components: PrimeNG has a rich collection of components that satisfies most of the UI requirements
 of a Web Form application like datatable, dropdown, multiselect, autocomplete, calendar notification messages, breadcrumbs 
 and other input components. So there would be no need of adding different libraries for different UI requirements. It also provides
 its own grid framework for the layout of the Web Forms which otherwise a different library should have been used.
 
* Templating: Most of the components are  customizable through the use of templating which provides flexibility if we need something
which is not provided out-of-the-box


### Dynamic forms/Validation infrastructure

Dynamic forms is the [recommended Angular way](https://angular.io/guide/dynamic-form) when complex Web Forms are required:

> "Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, 
they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.

> It may be more economical to create the forms dynamically, based on metadata that describes the business object model."

We decided to spend time to create a reusable infrastructure that will facilitate the developer on the creation of complex 
and large Web Forms, as required for this and future Dataflow. This infrastructure is of course independent of the specific Datflow.

Some of the basic achievements of this "framework" are:
a) the complete decoupling of the web forms from the html template (since the framework generates the necessary html). 
The developer no longer has to maintain both the code and the html (which is a tedious process).
b) *everything* concerning a form controls is configured at the level of the dynamic form. This means that in a single place in the code
all the control properties are set (e.g. label text), together with the validators concerning the control and even the layout 
of the control.

The above points make the forms much more maintainable in the long run (that is why it is recommended from Angular) even if some initial time
was needed for the development of the infrastructure.

Please find detailed developer documentation concerning the dynamic forms framework we created [here](src/app/dynamic-forms/README.md)

NOTE: This is a working solution but also a work in progress which could be improved if used in a consequent project.

### HandsOnTable plugin

After the initial feedback concerning the PoC we introduced the HandsOnTable plugin to provide the possibility of copy/paste functionality as in Excel.
This plugin was used in previous Dataflows of EEA so we decided to keep this working solution, using the plugin provide for [Angular 5]()https://handsontable.github.io/angular-handsontable/







# Documentation generated by Angular CLI 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

