import React, {Component}                           from 'react';
import {StyleSheet, View,Dimensions,Text, Platform} from 'react-native';
import color                                        from './Color'
import {ClassItem}                                  from "../ui/ClassItem";
type Props = {};

export default class HomeScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>
                    This is HomeScreen and from {navigation.from}
                </Text>
                <ClassItem/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems:'center',
        justifyContent:'center'
    },
});
