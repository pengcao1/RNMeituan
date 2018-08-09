/**
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'

type Props = {
    title:string,
    icon:Object,
    onPress:Function,
}
type State = {

}

class HomeMenuItem extends React.Component<Props,State>{
    render(){
        let {title,icon,onPress} = this.props
        console.log("HomeMenuItem = " + JSON.stringify(title));
        console.log("HomeMenuItem = " + JSON.stringify(icon));
        return(
            <TouchableOpacity style={sytles.container}>
                <Image source={icon} style={{width: 25, height: 25}}/>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const sytles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width/5,
        height:Dimensions.get('window').width/5,
    },
    icon:{
        width:Dimensions.get('window').width/9,
        height:Dimensions.get('window').width/9,
        margin: 5,
        overflow:"visible"
    }
});
export default HomeMenuItem