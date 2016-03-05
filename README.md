# flux-todolist
Flux Tutorial – Todo List

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process that will update bundle.js with any changes you wish to make.  This watcher is based on [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify), and it transforms React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).

To run the app, spin up an HTTP server and visit http://localhost/.../todomvc-flux/.  Or simply open the index.html file in a browser.


## Credit

This TodoMVC application was created by [Bill Fisher](https://www.facebook.com/bill.fisher.771).  This README document was written by Bill Fisher and the principal creator of Flux, [Jing Chen](https://www.facebook.com/jing).
