import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    Text,
    Platform,
    Button,
} from 'react-native';
import color from './Color'
import Jump from './Jump'

type Props = {};

export default class Home extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <View style={styles.navBarButton}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Positioning')
                            }}
                        >
                            <Text style={styles.leftButtom}>定位</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navBarTitleContainer}>
                        <Text style={styles.title}>首页</Text>
                    </View>
                    <View style={styles.navBarButton}>
                        <TouchableOpacity>
                            <Text style={styles.rightButtom}>消息</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    style={styles.topImg}
                    source={require("../img/skill-restaurant.png")}
                />
                <View style={styles.mid}>
                    <TouchableOpacity style={styles.icon}
                                      onPress={() =>
                                          this.props.navigation.navigate('Jump')
                                      }
                    >
                        <Image
                            style={styles.iconImg}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                        <Text>热门</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: color.background,
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
