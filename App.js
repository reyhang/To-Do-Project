
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigation from "./src/navigation"
import { rootReducer } from './src/redux/reducers';

export default AppWrapper = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <App /> 
    </Provider>
  )
}

export function App() {
  return (
    <Navigation />
  );
}




