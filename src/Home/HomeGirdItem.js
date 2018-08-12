/**
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
import screen from '../common/screen'
import Color from '../ui/Color'

type Props = {
    info: Object,
}
type State = {

}

class HomeGridItem extends React.Component<Props,State>{
    render(){
        const {info}=this.props

        const title = info.mtitle
        const subtitle = info.smstitle
        const imageUrl = info.imgurl.replace('w.h','120.0')
        return(
            <TouchableOpacity style={style.container}>
                <View style={style.info}>
                    <Text style={style.styleTitle} numberOfLines={1}>{title}</Text>
                    <Text style={style.styleSubTitle}>{subtitle}</Text>
                </View>
                <Image source={{uri:imageUrl}} style={style.icon}/>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: screen.width/2 - StyleSheet.hairlineWidth,
        height: screen.width/4,
        backgroundColor:'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: Color.bodar,
    },
    styleTitle:{
        flexWrap: 'wrap',
        fontSize:15,
        color:'red',
        marginBottom: 10,
        alignItems: 'center',
    },
    info: {
        width: 0,
        flexGrow: 1,
        marginLeft: 4,
    },
    styleSubTitle:{
        flexWrap: 'wrap',
        fontSize:14,
        color:'#333333'
    },
    icon:{
        width:screen.width/8,
        height:screen.width/8,
        backgroundColor:'blue',
        marginRight: 10,
    }
});
export default HomeGridItem