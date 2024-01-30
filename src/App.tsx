import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <UsersList /> 
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
