import React from 'react';
import { Provider } from 'react-redux'; // Assuming you are using react-redux for Redux integration
import Counter from './components/Counter';
import store from './context/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
