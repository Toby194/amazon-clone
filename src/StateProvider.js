// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This is the DATA Layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer and use it inside of a component
export const useStateValue = () => useContext(StateContext);