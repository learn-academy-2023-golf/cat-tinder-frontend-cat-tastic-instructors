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
