import * as React                                  from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

interface IClassItem {
    iconUrl?: string;
    descrText?: string;
}

export class ClassItem extends React.Component {

    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <Image source={require('../img/skill-restaurant.png')}>
                </Image>
                <Text>
                   This is ClassItem
                </Text>
            </TouchableOpacity>
        );
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    }
});