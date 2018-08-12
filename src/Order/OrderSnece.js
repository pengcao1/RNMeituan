/**
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

type Props = {

}
type State = {

}

class OrderSence extends PureComponent<Props,State>{
    render(){
        return(
            <View style={styles.container}>
               <Text>
                   This is Order
               </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
export default OrderSence