/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native'
 import HomeMenuView from './HomeMenuView'
 import * as api from '../API/api'
 import NativationItem from '../ui/NavigationItem'
 import HomeGridView from './HomeGridView'
 import Color from '../ui/Color'
 import SpaceView from '../ui/SpaceView'
 import {
     fetchInfos
 } from "../actions/getInfoAction";
 import { connect } from "react-redux";

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
         console.log("HomeSence .. render fetchInfoData ",this.props.fetchInfoData)
         return(
            <View style={{flex:1}}>
            <FlatList
                ListHeaderComponent={() =>this.getHomeHeader()}
                data={[{title:"1",key:1},{title:"2",key:2}]}
                renderItem={(rowData)=>(
                    <Text>{rowData.item.title}</Text>
                )}
                keyExtractor = {(item, index) => index.toString()}
            />
            </View>
         )
     }

     getHomeHeader = () => {
         return(
            <View>
                <HomeMenuView
                menuInfos={api.menuInfos}
                onMenuSelect={(index)=>{
                console.log("click index = " + index);
                alert("click index = " +index)
                }}/>
                <SpaceView/>
                {this.props.fetchInfoData &&
                <HomeGridView infos = {this.props.fetchInfoData}/>}
                <SpaceView/>
                <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
                    <Text>Divd of FlatList</Text>
                </View>
            </View>
         );
     }

     componentDidMount(){
         console.log("componentDidMount")
         this.props.fetchInfos();
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


 const mapStateToProps = state => ({
     fetchInfoData: state.payload
 })

 export default connect(mapStateToProps, {
     fetchInfos
 })(HomeSence)
