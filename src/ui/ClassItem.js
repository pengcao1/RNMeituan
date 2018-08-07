import * as React                                  from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";


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
        flex:1
    }
});