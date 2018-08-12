/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text} from 'react-native'
 import Color from '../ui/Color'
 import HomeGridItem from './HomeGridItem'
 
 type Props = {
     infos: Array<Object>
 }
 type State = {}

 class HomeGridView extends Component<Props,State>{
     render(){
         const {infos} = this.props
         return(
            <View style={styles.gridContainer}>
                {infos.map((info,index) => (
                    <HomeGridItem
                        key={index}
                        info={info}
                    />
                ))}
            </View>
         )
     }
 }

 const styles = StyleSheet.create({
    gridContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: Color.bodar,
    }
 })

 export default HomeGridView