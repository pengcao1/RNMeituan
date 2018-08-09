/**
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text} from 'react-native'

 type Props = {

 }
 type State = {

 }

 class HomeSence extends React.Component<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return {
            title: '11MyTitle',
        };
   };
     render(){
         return(
             <View style={sytles.container}>
                <Text>
                    This is HomeSence
                </Text>
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