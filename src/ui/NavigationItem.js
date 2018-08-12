import * as React                                  from "react";
import {Image, StyleSheet, Text, TouchableOpacity,View, ViewPropTypes} from "react-native";

type Props = {
    title?: string,
    titleStyle?:ViewPropTypes.style,
    icon?:any,
    iconStyle:ViewPropTypes.style,
    onPress?:Function,
}
type State = {

}

export class NativationItem extends React.Component<Props,State> {
    render() {
        const {title,titleStyle,onPress,icon,iconStyle} = this.props;
        const titleElement = title && (
            <Text style={[styles.title,titleStyle]}>{title}</Text>
        )
        const iconElement = icon && (
            <Image source={icon} style={styles.icon,iconStyle}/>
        )
        return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {titleElement}
            {iconElement}
        </TouchableOpacity>
        )
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize: 15,
        color:'#333333',
        margin:8,
    },
    icon:{
        width:17,
        height:27,
        margin:8,
    },
});

export default NativationItem