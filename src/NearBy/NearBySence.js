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
    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle:"NearBySence",
        }
    }
    render(){
        return(
            <View style={styles.container}>
               <Text>
                   This is NearBy
               </Text>
            </View>
        )
    }
    componentDidMount(){
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