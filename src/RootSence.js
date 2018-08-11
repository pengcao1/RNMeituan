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
            <Navigator/>
        )
    }
}

const Tab = createBottomTabNavigator({
    Home:{
        screen:HomeSence,
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
        inactiveTintColor:Color.gray,
        style:{backgroundColor:'white'}
    },
})

const Navigator = createStackNavigator({
    Tab:{
        screen: Tab,
        navigationOptions: () => ({
            headerRight: (<View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() =>{
                    console.log("HomeSence navigationRight press")
                }}>
                <Image source={require('./img/public/icon_navigationItem_share.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
              </View>),
            headerLeft: (<View>
                    <TouchableOpacity onPress={() =>{
                        console.log("HomeSence navigationLeft press")
                    }}>
                    <Image source={require('./img/public/icon_navigationItem_share.png')} style={{width: 25, height: 25}}/>
                    </TouchableOpacity>
                </View>),
        }),
    }
},{
    navigationOptions:{
        headerTintColor:'green',
        headerMode: 'auto'
    }
})


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default RootSence