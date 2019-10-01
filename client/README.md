# MEAN_Final_Project: Client for the Capstone Project - Heroes League!
Client (Angular) for Capstone 

## Site Author
* **Adam Jacobs** - HartCode Academy 2019

## Purpose and goals of this site
- To display the leagues, teams, and members for heros and villians.
- To register, edit, and delete site users. 
- To view hero teams and members.

## Audience
- Prospective and current team managers.
- Prospective and current heroes and villians.  
- Prospective and current users to the site.

### Actions for my site?
- To view the hero and villian leagues, teams, and members.
- To sign up users for the site.
- To edit user's information.
- To be able to unregister users and delete their account.

## Site Pages:
- Home Page 
http://localhost:4200/

- Login Page
http://localhost:4200/login

- Register Page
http://localhost:4200/register

- Edit User Profile Page (Update User Email - cannot access unless user has logged in)
http://localhost:4200/edit

- Teams Page (Landing Page - cannot access unless logged in)
http://localhost:4200/teams

- Admin Page (Details non-admin users - cannot access unless logged in and user is an admin)
http://localhost:4200/admin
 

> Pages also calls for authentication, and if the user is not logged in (or in the 
> case of the Admin Page, is not an admin), that user is routed back to the home page and/or login page.
>

## Technologies
- HTML5/CSS3/Bootstrap4
- Angular
- Node.js

# Steps to create
+ In the Terminal, in the client dir, execute the following:
```
$ ng new client
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE client/angular.json (3409 bytes)
CREATE client/package.json (1277 bytes)
...
Project 'client' successfully created.
$ 
```

## Load App
```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/

## Modify App 
+ In the Terminal, in the client dir, execute the following to install Bootstrap:
```
npm install bootstrap --save
+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
found 0 vulnerabilities
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```
+ Reload the page to confirm Bootstrap has been applied.

Will also need to install:
```
npm install -g @angular/cli@latest
```


# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).