import React, {PureComponent} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

type Props ={}
type State ={}

class GroupPurchaseCell extends PureComponent<Props,State>{
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <Image style={styles.icon}/>
                <View style={styles.rightContainer}>
                    <Text>Header2</Text>
                    <Text style={{marginTop:10}}>Paragrah</Text>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style={styles.price}>9.99$</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#FF0000",
        backgroundColor: "white",
    },
    icon: {
        width:80,
        height:80,
        borderRadius: 5,
        backgroundColor:"blue"
    },
    rightContainer:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color:"#333333"
    }
})

export default GroupPurchaseCell