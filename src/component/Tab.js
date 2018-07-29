import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import color from './Color'  //颜色样式
import Memo from "./Memo";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Statistics from "./Statistics";
import {createBottomTabNavigator} from "react-navigation";
import Home from "./Home";
import My from "./My"

export default  Tab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel:false,
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Memorandum: {
        screen: Memo,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '备忘',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-paper' : 'ios-paper-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Statistics: {
        screen: Statistics,
        navigationOptions: {
            tabBarLabel: '统计',
            tabBarPosition: 'bottom',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-stats' : 'ios-stats-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarPosition: 'bottom',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: color.gray,
    },
    animationEnabled: true,
    swipeEnabled: false,
    //是否可以滑动切换
    swipeEnabled: true,
    //切换是否有动画
    animationEnabled: true,
    //进入App的首页面
    initialRouteName: 'Home',
    //对于导航的设置
    tabBarOptions: {
        //android特有下划线的颜色1
        indicatorStyle: {height: 0},
        //文字的样式
        labelStyle: {
            fontSize: 10
        },
        //对于导航的stytles
        style :{
            borderTopColor:'#ebebeb',
            borderTopWidth:1,
            backgroundColor:'white',
            height:Dimensions.get('window').height*0.08,
        }
    }
});