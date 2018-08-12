/**
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

type Props = {

}
type State = {

}

class NearBySence extends PureComponent<Props,State>{
    render(){
        return(
            <View style={styles.container}>
               <Text>
                   This is NearBy
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
export default NearBySence