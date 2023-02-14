### Class notes `Chapter-12 Let's build our store` (04/02/2023)

Today's session will be on more efficient & complex ways of handling data in our application. -> Redux

Small apllication -> Context API is sufficient

When application grows bigger -> Use Redux 

Redux -> external library for state management

Concerns with Redux :

1. Huge learning curve 
2. Complex configuration 
3. Too much boilerplate code  

So, Redux Toolkit was introduced

Redux vs Redux-Toolkit 


At the end of the day -> Redux is an Object which can be accessed by all components 

State variable 's scope -> Only within the component 

Only single Redux store -> for the whole app -> with logical separation -> with each store having different slices 

cart 

user 

auth 

.
.
.
slices 



Today's feature that we are building -> Cart Workflow 

Restaurant Menu Click on ADD button -> Item added to Cart -> 


Steps :

Writing into the Store 

1. When we need to make a modification in the store, we must first dispatch an action that calls a reducer function which updates the slice of the store.
Eg : Click Add button -> addItem -> reducer -> cart in store 

Jargons : Dispatch, action, reducer, slice, store


Reading from the Store 
2. When we want to read from the store, we must call a Selector Hook (function) (selecting a slice of store), which updated the cart component. 

Cart component is subscribed to the store using the Selector 

Eg: Store (Collection of slices) -> Selector -> subscribe -> Cart component  

Jargons : Selector, slice, store 


-----
Toolkit -> Core of Redux 
React-redux 0> bridge between redux & React 

Install 
npm install @reduxjs/toolkit  
npm install react-redux

Steps :
1. Create store.js file in utils and import configureStore() from rtk
2. Create store using configureStore() and export it.
3. Import { Provider } from react-redux in root component
4. Import store from utils in root component
5. Enclose the components that need Store using <Provider>
6. Send props store={store}
7. Create cartSlice.js in utils and import createSlice() from rtk
8. Create a cartSlice using createSlice with name, initialState (items :[]) and reducers funtion 
8. reducers funtion contains actions that is dispatched - addItem with state & action params 
9. state contains the states of the slice and action
10. modifications are done to state inside action of reducers -> addItem, removeItem, cLearCart
11. export the reducer cartSlice.reducer  (default export)
12. export cartSlice.actions with all the action functions (destructured named exporte)
13. import the cartSlice into the store 


reducers is the function name -> but exported as reducer  -> confusing 


How createSlice is stored in background ?

cartSlice = {
  actions : {
    addItem,
    removeItem,
    clearCart 
  },
  reducer : reducers 
}


useSelector -> what it is subscribing to 