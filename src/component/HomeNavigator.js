import React                      from 'react';
import {Dimensions,}              from 'react-native';
import color                      from './Color'  //颜色样式
import ILikeScreen                from "./ILikeScreen";
import Ionicons                   from 'react-native-vector-icons/Ionicons'
import {createBottomTabNavigator} from "react-navigation";
import HomeScreen                 from "./HomeScreen";
import ProfileScreen              from "./ProfileScreen";
import I18n                       from "../../src-modules/i18n"

export default  HomeNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: I18n.t("home.homeTitle"),
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

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: I18n.t("home.profileTitle"),
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
    ILike: {
        screen: ILikeScreen,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: I18n.t("home.memoTitle"),
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-paper' : 'ios-paper-outline'}
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
    swipeEnabled: true,
    //切换是否有动画
    animationEnabled: true,
    //进入App的首页面
    initialRouteName: 'Home',
    //对于导航的设置
    tabBarOptions: {
        //android特有下划线的颜色1
        indicatorStyle: {height: 1},
        //文字的样式
        labelStyle: {
            fontSize: 10
        },
        //对于导航的stytles
        style :{
            borderTopColor:'#ff00eb',
            borderTopWidth:1,
            backgroundColor:'white',
            height:Dimensions.get('window').height*0.08,
        }
    }
});