import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import color from "./Color"

export default class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    This is ProfileScreen
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.background,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:30
        }
    }
);