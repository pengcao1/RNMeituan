import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; 

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../img/public/icon_navigationItem_share@2x.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
}

export default class LogoTitle