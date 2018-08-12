/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
 import HomeMenuView from './HomeMenuView'
 import * as api from '../API/api'
 import Color from '../ui/Color'
 import NativationItem from '../ui/NavigationItem'

 type Props = {

 }
 type State = {

 }

 class HomeSence extends React.Component<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle:{backgroundColor:Color.primary},
            headerTitle:(
                <TouchableOpacity style={sytles.searchBar} >
                    <Image source={require('../img/home/search_icon.png')} style={sytles.searchIcon}/>
                    <Text style={sytles.searchText}>搜索</Text>
                </TouchableOpacity>
            ),
            headerLeft:(
                <NativationItem 
                    title="定位"
                    onPress={() => {
                    }}
                    titleStyle={{color:'white'}}
                />
            ),
            headerRight:(
                <NativationItem 
                    icon={require('../img/mine/icon_navigationItem_message_white.png')}
                    onPress={() => {
                    }}
                    titleStyle={{color:'white'}}
                />
            ),
        };
   };
     render(){
         console.log("HomeMenuVIew " + api.menuInfos[0].title);
         console.log("HomeMenuVIew 11=" + require('../img/home/icon_homepage_food_category.png'));
         return(
             <View >
                <HomeMenuView
                    menuInfos={api.menuInfos}
                    onMenuSelect={(index)=>{
                        console.log("click index = " + index);
                        alert("click index = " +index)
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
     },
     searchBar:{
         flexDirection:'row',
         width:Dimensions.get("window").width*0.7,
         height:30,
         borderRadius:19,
         justifyContent:'center',
         alignItems: 'center',
         backgroundColor:'white',
     },
     searchIcon:{
         //flexDirection:'colmon'
         width:20,
         height:20,
         margin: 5,
     },
     searchText:{
         fontSize:14,
     },
 });
 export default HomeSence
