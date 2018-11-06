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
import Instabug from "instabug-reactnative";

export default class App extends Component {
  constructor(){
    Instabug.startWithToken("e17c926880b2a72ff5d65992e233dd74", [
      Instabug.invocationEvent.shake
    ]);
  }
  render() {
    return (
      <Provider store={store}>
        <RootSence/>
      </Provider>
    );
  }
}
