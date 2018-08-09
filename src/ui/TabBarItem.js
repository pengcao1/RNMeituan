import * as React                                  from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

type Props = {
    normalImage: any,
    selectedImage: any,
    focused: boolean,
    tintColor: any,
}
type State = {

}


export class TabBarItem extends React.Component<Props,State> {
    render() {
        let {normalImage,selectedImage,focused,tintColor} = this.props
        return(
            <Image
                source={focused? selectedImage: normalImage}
                style={{width:15,height:25,tintColor:tintColor}}
            />
        )
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    }
});

export default TabBarItem