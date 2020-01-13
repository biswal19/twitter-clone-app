### Prerequisites

* node
* npm
* mongodb (for localhost)
* yarn
* heroku (for public)

1. Clone this repository

## Install the dependencies

1. Install server dependencies
    ```bash
    $ cd server
    $ yarn install
    ```
2. Install client dependencies
    ```bash
    $ cd client
    $ yarn install
    ```

## Option 1: Run the app in localhost

1. Start mongodb locally
    ```bash
    $ mongod
    ```
2. Start the server
    ```bash
    $ cd server
    $ yarn start
    ```
3. Start the client
    ```bash
    $ cd client
    $ yarn start
    ```
4. Browse to `http://localhost:3000/`

## Option 2: Run the app in heroku

1. Build the client
    ```bash
    $ cd client
    $ yarn build
    ```
2. Create a public folder on server
    ```bash
    $ cd server
    $ mkdir public
    ```
3. Copy the content of client build folder to server public folder
4. Login to heroku web and create new applicatoin
5. Add mongodb to your application
6. Go to setting section of your application and click on Reveal Config Vars
7. Find the MONGODB_URI and add this database address to your .env file in server folder
8. Add your PORT and SECERT to Config Vars KEY and VALUE in heroku
9. Go to the deploy section of application and execute the commands on server folder
    ```bash
    $ cd server
    $ git init
    $ your application commit
    $ git add .
    $ your files commit
    $ push to heroku (use command 'node index.js' to run your sever locally)
10. Now you will find after successful push to heroku and open that address in your browser.

### Front End

- [x] [React](https://reactjs.org/) SPA using [React Router](https://reacttraining.com/react-router/web/)
- [x] [Redux](https://redux.js.org/) w/ [Thunk](https://github.com/reduxjs/redux-thunk) for state management
- [x] Use material-ui for create template (https://material-ui.com) 
- [x] [axios](https://github.com/axios/axios) for API calls with [JWT](https://jwt.io/) Authentication


### Back End

- [x] Data persistence with MongoDB w/ [mongoose](https://mongoosejs.com/) ORM
- [x] REST API made with [Node](https://nodejs.org/) and [Express](https://expressjs.com/)
- [x] Authentication with [passport.js](http://passportjs.org)


## License

This project is made available under the **MIT License**.
