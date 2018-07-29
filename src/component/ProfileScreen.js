import React from 'react';
import {Text, View} from "react-native";

export default class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View>
                <Text>
                    This is ProfileScreen
                </Text>
            </View>
        );
    }
}