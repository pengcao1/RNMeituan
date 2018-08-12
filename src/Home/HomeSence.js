/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
 import HomeMenuView from './HomeMenuView'
 import * as api from '../API/api'
 import Color from '../ui/Color'
 import NativationItem from '../ui/NavigationItem'
 import HomeGirdItem from './HomeGirdItem'

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
                <View style ={{height:14,backgroundColor:Color.paper}} />
                <View style={sytles.gridContainer}>
                {this.state.discounts.map((info,index) => (
                    <HomeGirdItem
                        key={index}
                        info={info}
                    />
                ))}
                </View>
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
             console.log("HomeSence request data = " + JSON.stringify(json.data))
         }catch(error){
             console.log("HomeSence request data error " +JSON.stringify(error))
             alert("error " +error)
         }
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
     gridContainer:{
         flexDirection:'row',
         flexWrap:'wrap',
         borderTopWidth: StyleSheet.hairlineWidth,
         borderLeftWidth: StyleSheet.hairlineWidth,
         borderColor: Color.bodar,
     }
 });
 export default HomeSence
