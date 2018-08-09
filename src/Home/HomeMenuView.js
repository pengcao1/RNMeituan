/**
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image, Text,Dimensions} from 'react-native'
import HomeMenuItem from './HomeMenuItem'

type Props = {
    menuInfos:Array<Object>,
    onMenuSelect:Function,
}
type State = {

}

class HomeMenuView extends React.Component<Props,State>{
    render(){
        let {menuInfos,onMenuSelect} = this.props
        let defaultPic = require('../img/home/icon_homepage_default.png');
        console.log("defaultPic = " +defaultPic);
        let menuElements = menuInfos.map((info,index) =>{
            return(
             <HomeMenuItem
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={()=>{
                   console.log("HomeMenuView onPress")
                }}
            />
            )
        })

        let menuView = (
            <View style={sytles.itemsView}>
                {menuElements}
            </View>
        )
        return(
            <View style={sytles.container}>
                {menuView}
            </View>
        )
    }
}

const sytles = StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'white',
    },
    itemsView:{
        flexDirection: 'row',
        width:Dimensions.get('window').width,
        flexWrap:'wrap'
    }
});
export default HomeMenuView