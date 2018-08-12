/**
 * 
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet,View,Image,Text, TouchableOpacity} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import TabBarItem from './ui/TabBarItem'
import HomeSence from './Home/HomeSence'
import NearBySence from './NearBy/NearBySence'
import OrderSence from './Order/OrderSnece'
import MineSence from './Mine/MineSence'
import Color from './ui/Color'

class RootSence extends PureComponent{
    render(){
        return(
            <Tab/>
        )
    }
}
const Navigator = createStackNavigator({
    Home:{
        screen:HomeSence,
    },
    NearBy:{
        screen:NearBySence,
    },
    Mine:{
        screen:MineSence,
    }
});

const Tab = createBottomTabNavigator({
    Navigator1:{
        screen:Navigator,
        navigationOptions:{
        tabBarVisible:true,
        tabBarLabel:'Meituan',
        tabBarIcon:({focused,tintColor})=> (
            <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_homepage.png')}
            selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
            />
        )
        }
    }
},{
    tabBarPosition:'bottom',
    lazy:true,
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:Color.primary,
        inactiveTintColor:Color.gray,
        style:{backgroundColor:'white'}
    },
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default RootSence