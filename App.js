/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
// import HomeStack          from "./src/HomeStack"
import RootSence from "./src/RootSence";
import { Provider } from "react-redux";
 import { store } from "./src/store/store"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootSence/>
      </Provider>
    );
  }
}
