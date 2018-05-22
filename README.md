# Eea FQD PoC

This project was developed as an initial Proof of Concept, using the FQD Dataflow as a starting point, to study the possibility
of migrating the new Web Form applications to a new web application framework. Angular 5(+) was chosen for this study.

- [Reasons for choosing Angular](#reasons-for-choosing-angular)
  * [Familiarity](#familiarity)
  * [Maintainability](#maintainability)
  * [Angular CLI](#angular-cli)
  * [Popularity/Active community](#popularity-active-community)
- [Architectural decisions](#architectural-decisions)
  * [Reactive Forms and Validation on the Form Data Model](#reactive-forms-and-validation-on-the-form-data-model)
  * [Dynamic forms/Validation infrastructure](#dynamic-forms-validation-infrastructure)
  * [UI Component library](#ui-component-library)
  * [HandsOnTable plugin](#handsontable-plugin)
  
## Reasons for choosing Angular

The following are some reasons for choosing Angular 5 as a web framework

### Familiarity

Angular 5 syntax and architecture is different from AngularJS (used in most(?) of the previous Web Forms) but many fundamental concepts
remain the same. Especially if a developer has worked with AngularJS 1.5 (or above) using Typescript. This means that the transition 
from AngularJS to Angular 5 is smoother for the developer than to a completely different framework.
Also (and this is very important in our case) Typescript is much more familiar to back-end developers (for example Java developers)
with an Object Oriented Programming background.

### Maintainability

Angular addresses maintainability mainly with the use of Typescript. Typescript is a strongly-typed language (which Javascript is not), 
which allows developers to find bugs and mistakes earlier in the development process (before runtime). 
TypeScript also allows developers that are new to a codebase to more quickly get up to speed due to their ability 
to more quickly see the types of data moving through the application.
The component-oriented architecture promoted bu Angular is also a step towards more modular (and thus more maintainable) code.

### Angular CLI

Using the build-in CLI code generation tool makes the process of setting up a new project completely trivial. 
The project is generated automatically using the CLI which relieves the developer from various time-consuming tasks including 
configuring a new project, configuring a build tool, creating a build process etc. 
During development using the CLI the developer can quickly generate new components, services etc avoiding the repetitive boiler-plate
code that must be written for such tasks.

### Popularity/Active community

Angular is one of the most popular front-end frameworks at the moment, backed and supported by Google. 
(see for example [here](https://cdn-images-1.medium.com/max/1200/1*O2sPMfzy07WlVuCrdj662Q.png)). 

This is very important for the following reasons:

* Developers can easily find support or code samples online and benefit from the collective experience of a large community
* Many third-party libraries are developed for Angular (e.g. UI Component libraries like PrimeNG) which facilitates 
the development process
* Potential issues in the actual framework are fixed relatively fast

## Architectural decisions

### Reactive Forms and Validation on the Form Data Model

Two crucial decision that were made at the begining of the project were:
a) to user reactive forms and
b) to conduct all validations on the level of the Form Model.
c) keep the Data Model exactly the same as the Form Model (as much as possible)

Concerning a) One of benefits of the reactive forms is that create and manipulate form control objects directly in the component class. 
As the component class has immediate access to both the data model and the form control structure, 
you can push data model values into the form controls and pull user-changed values back out. 
The component can observe changes in form control state and react to those changes. 
This gives a lot of control to the developer and at the same time makes the code more testable.

Concerning b) what was achieved was to use Angular validation infrastructure (built-in Validators, custom Validators, 
form state/validation lifecycle management etc) without having to develop a mechanism to validate Data Model

Concerning c) the aim was to avoid having to transform the Data Model to Form Model back and forth.

### Dynamic forms/Validation infrastructure

Dynamic forms is according to official Angular documentation the [recommended way](https://angular.io/guide/dynamic-form) 
when complex Web Forms are required:

> "Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, 
they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.

> It may be more economical to create the forms dynamically, based on metadata that describes the business object model."

Note here that the Dynamic Forms paradigm uses the reactive forms technique in the background so the benefits of reactive forms 
mentioned above are not lost.

Hence, it was decided to spend some time to create a reusable infrastructure that will facilitate the developer on the creation 
of complex and large Web Forms, as required for this and possible future Dataflows. 

This infrastructure is completely independent of the specific Dataflow (it might as well be an independent code-base/project).

Some of the basic achievements of this "framework" are:

a) **decoupling** the web forms from the html template (since the framework generates the necessary html). 
The developer no longer has to maintain both the code and the html (which is a tedious and error-prone process).

b) **everything** concerning form control elements is configured at the level of the dynamic form. This means that in a single place 
in the code all the control properties are set (e.g. label text), together with a) the validators concerning the control and 
b) even the layout of the control.

The above points make the code concerning the forms much more concise, small and thus maintainable in the long run 
(that is why it is recommended from Angular), even if some initial time was needed for the development of the infrastructure.

Please find detailed technical documentation concerning the dynamic forms framework that was created [here](src/app/dynamic-forms/README.md)

> NOTE: This is a working solution but also a work in progress, which could be improved if used in a subsequent project.

### UI Component library

 The UI component library [PrimeNG](https://www.primefaces.org/primeng/#/) was chosen for several reasons:

* **Speed of development**: Using a UI component library speeds-up considerably the time of developing web applications. The alternative
of developing from scratch our own components is not even an option if fast delivery is important.

* **Single library for (almost) all components**: PrimeNG has a rich collection of 80+ components that satisfies most of the UI 
requirements of a Web Form application like datatable, dropdown, multiselect, autocomplete, calendar notification messages, breadcrumbs 
 and many more. Especially its datable is arguably one of the more feature-rich datables available. Using PrimeNG the need of adding 
 different libraries for different UI requirements is almost non-existent (except for very special cases, like the HandsonTable 
 mentioned later in this document). PrimeNG also provides its own internal Grid CSS framework which should be used for the layout 
 of the Web Forms. Alternatively, an extra library would have been needed.
 
* **Templating**: Most of the components are  customizable through the use of templating which provides flexibility in case something 
is needed which is not provided out-of-the-box.

### HandsOnTable plugin

After the initial feedback concerning the PoC, the HandsOnTable plugin was introduced to provide the possibility of copy/paste functionality 
of rows as in Excel. This plugin was used in previous Dataflows of EEA so it was decided to keep a working and tried solution, 
using the [wrapper-plugin](https://handsontable.github.io/angular-handsontable/) provided for Angular 5


---
---
---



# Find Bellow Documentation generated by Angular CLI 
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

