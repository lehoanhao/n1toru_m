import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppNavigator from './src/app/Navigation/AppNavigator';
import allReducers from './src/app/Reducers/index';
const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}