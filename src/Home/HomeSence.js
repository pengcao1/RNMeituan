/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
 import HomeMenuView from './HomeMenuView'
 import * as api from '../API/api'
 import NativationItem from '../ui/NavigationItem'
 import HomeGridItem from './HomeGridItem'
 import HomeGridView from './HomeGridView'
 import Color from '../ui/Color'
 import SpaceView from '../ui/SpaceView'

 type Props = {

 }
 type State = {
     discounts?:Array<Object>,
 }

 class HomeSence extends React.Component<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle:{backgroundColor:Color.primary},
            headerTitle:(
                <TouchableOpacity style={styles.searchBar} >
                    <Image source={require('../img/home/search_icon.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchText}>搜索</Text>
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

   constructor(props:Object){
       super(props)
       this.state = {
           discounts:[],
       }
   }

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
                <SpaceView/>
                <HomeGridView infos={this.state.discounts}/>
                <SpaceView/>
             </View>
         )
     }

     componentDidMount(){
         console.log("componentDidMount")
         this.requestData();
     }
     requestData = async () => {
         try{
            console.log("HomeSence request data = " + api.GET_DISCOUNT)
             const reponse = await fetch(api.GET_DISCOUNT)
             const json = await reponse.json()
             this.setState({discounts:json.data})
            // console.log("HomeSence request data = " + JSON.stringify(json.data))
         }catch(error){
             console.log("HomeSence request data error " +JSON.stringify(error))
             alert("error " +error)
         }
     }
 }

 const styles = StyleSheet.create({
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
     gridContainer:{
         flexDirection:'row',
         flexWrap:'wrap',
         borderTopWidth: StyleSheet.hairlineWidth,
         borderLeftWidth: StyleSheet.hairlineWidth,
         borderColor: Color.bodar,
     }
 });
 export default HomeSence
