import React, {Component} from 'react';
import {StyleSheet, View,Dimensions,Text, Platform} from 'react-native';
import color from './Color'
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
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? 40 : 55,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: color.titleBottonSolid,
        backgroundColor: color.primary,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        top: 0,
        right: 40,
        bottom: 0,
    },
    title: {
        fontSize: 20,
        color: color.white,

    },
    leftButtom: {
        color: color.white,
    },
    rightButtom: {
        color: color.white,
    },
    navBarButton: {
        alignItems: 'center',
        margin: 10
    },
    topImg: {
        width: Dimensions.get('window').width,
        height: 140,
    },
    mid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',

    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',

        width: Platform.OS === 'ios' ? Dimensions.get('window').width / 4 : Dimensions.get('window').width / 4,
    },
    iconImg: {
        width: Platform.OS === 'ios' ? Dimensions.get('window').width / 8 : Dimensions.get('window').width / 8,
        height: Platform.OS === 'ios' ? Dimensions.get('window').width / 8 : Dimensions.get('window').width / 8,
        borderRadius: Platform.OS === 'ios' ? 15 : 50,
        marginTop: 6,
    }

});
