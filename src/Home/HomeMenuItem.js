/**
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
import screen from '../common/screen'

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
            <TouchableOpacity style={sytles.container} onPress={onPress}>
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
        width:screen.width/5,
        height:screen.width/5,
    },
    icon:{
        width:screen.width/9,
        height:screen.width/9,
        margin: 5,
        overflow:"visible"
    }
});
export default HomeMenuItem