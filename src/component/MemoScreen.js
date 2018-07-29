import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import color from "./Color"

export default class MemoScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View stlye={styles.container}>
                <Text>
                    This is Memo
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
        }
    }
);