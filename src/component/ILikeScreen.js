import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import color from "./Color"

export default class ILikeScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        console.log("in ILikeScreen render func");
        return(
            <View style={styles.container}>
                <Text >
                    This is ILikeScreen
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
            fontSize:20
        }
    }
);