/**
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

type Props = {

}
type State = {

}

class MineSence extends PureComponent<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle:"MineSence",
        }
    }
    render(){
        return(
            <View style={styles.container}>
               <Text>
                   This is MineSence
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
export default MineSence