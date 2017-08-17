import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import Header from './components/Header';
import Main from './containers/Main';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <View>
        <Header>Timesheet</Header>
        <Main />
      </View>
    </Provider>
  );
}

export default App;
