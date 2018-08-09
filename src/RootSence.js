/**
 * 
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import {TabNavigator, createBottomTabNavigator} from 'react-navigation'
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

const Tab = createBottomTabNavigator({
    Home:{ 
        screen:HomeSence,
        navigationOptions: () =>({
            tabBarLabel:'Meituan',
            tabBarIcon:({focused,tintColor})=> (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('./img/tabbar/tabbar_homepage.png')}
                selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        })

    },
    NearBy:{
        screen:NearBySence,
        navigationOptions: () =>({
            tabBarLabel:'NearBy',
            tabBarIcon:({focused,tintColor})=> (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('./img/tabbar/tabbar_discover.png')}
                selectedImage={require('./img/tabbar/tabbar_discover_selected.png')}
                />
            )
        })
    },
    Order:{
        screen:OrderSence,
        navigationOptions: () =>({
            tabBarLabel:'Oeder',
            tabBarIcon:({focused,tintColor})=> (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('./img/tabbar/tabbar_order.png')}
                selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                />
            )
        })
    },
    Mine:{
        screen:MineSence,
        navigationOptions: () =>({
            tabBarLabel:'Mine',
            tabBarIcon:({focused,tintColor})=> (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('./img/tabbar/tabbar_mine.png')}
                selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                />
            )
        })
    },
},{
    tabBarPosition:'bottom',
    lazy:true,
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:Color.primary,
        inactiveTintColor:Color.gray
    }
}
)


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default RootSence