## Cat Tinder Frontend 12/4/23 Golf

Vocabulary
SPAs
assets directory
components directory
pages directory
Reactstrap
scaffolding
React Router

- Single Page Applications (SPAs): web applications that load a single HTML page and all the relevant software, directories, and files are in one application

- Decouple application: splitting the project into two parts. backend (database) - Rails
frontend (user interface) - React

1. Create Directories in the src
- assets: static files such as images
- components: react components that appear on every UI
- pages: react components that appear as needed on UI

2. Create component files
- basic functional component
```js
  import React from "react"

  const App = () => {
    return(
      <> 
        <h1> Have a Meow-tastic Day!</h1>
      </>
    )
  }

  export default App
```
- import component and perform component call on App.js

3. Create page files
- import component on App.js

4. Install styling dependencies
- reactstrap: a library that provides styling components
- install reactstrap and bootstrap 
- import on src/index.js

5. Create routes on App.js
- react router: a library that provides navigation components
- install react-router-dom
- add BrowserRouter to index.js
- add Routes and Route components to App.js
- verify the urls are rendering as expected 

6. Create mock data
- create a file for the mock data using camelCasing naming convention in the src directory
- import the file onto App.js
- import useState for the react state
- make the mock data the initial value of the state variable

7. Style UI for components
- copyright emblem `&copy;`
- utilizing styling components from reactstrap
  - Click show code
  - Copy applicable code
  - import components from reactstrap
- utilizing bootstrap
  - https://getbootstrap.com/
  - Click `Read Docs`



# React Testing Library
Types of testing:
- Static: PR's and inspecting pages for syntax mistakes
- Unit: Looks at one portion of code and checks the output
- Integration: Tests our code that it is working together in our application
- End-to-end: Automates the user going through the application

- render: allows us to call a component
- screen: allows us to see the whole node tree that gets sent to the user


Debugging Tools:
- screen.debug()
- screen.logTestingPlaygroundURL()


# Read Functionality

## RESTful Routes
API:
- index: (read / GET) all the cats
- show: (read / GET) shows one cat
- create
- update
- destroy

UI:
- new: gives us a form
- edit: gives us a form

# Fetch
- Makes asynchronous requests
- JavaScript is single threaded - only does one thing at a time
- Fetch allows us to multitask
- Fetch sends a request and waits for a response
- Fetch returns a promise

Promises:
- JavaScript Objects
- Promises come in three states: pending, fullfilled, rejected
- If promise is fullfilled - we get a payload
- If a promise is rejected - we get an error

