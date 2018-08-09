/**
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text} from 'react-native'
 import HomeMenuView from './HomeMenuView'
 import * as api from '../API/api'

 type Props = {

 }
 type State = {

 }

 class HomeSence extends React.Component<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'HomeSence',
        };
   };
     render(){
         console.log("HomeMenuVIew " + api.menuInfos[0].title);
         console.log("HomeMenuVIew 11=" + require('../img/home/icon_homepage_food_category.png'));
         return(
             <View >
                <HomeMenuView
                    menuInfos={api.menuInfos}
                    onMenuSelect={()=>{
                        console.log("clicl")
                    }}
                />
             </View>
         )
     }
 }

 const sytles = StyleSheet.create({
     container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
     }
 });
 export default HomeSence