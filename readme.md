### Simply Redux /w Plain Javascript


Everything is loaded for you, this example includes Redux.

*Get started*
 - Terminal:
   - `npm install`
   - `npm run build`
   - In a seperate tab: `npm start`  (you might need to install `live-server`)
 - Work in `app.js`

**Part 1: Create Useless Counter Walkthrough**

 - Has 2 buttons: MORE and FEWER  (You already have the elements in app.js)
 - Each has a click event that dispatches an ACTION object to the REDUCER
 - The ACTION is what to do.
 - The REDUCER is how to do it. It is registered to the Redux STORE when the store is created
 - Custom UpdateTheDOM function is what do when there is a state change
 - SUBSCRIBE (store.subscribe)

**Part 2: Create todo list**

 - Use the basics from part 1 to try to make a todo list.

![](https://i.gyazo.com/b71e8f0d42a06e607049a9caea7254a8.png)
