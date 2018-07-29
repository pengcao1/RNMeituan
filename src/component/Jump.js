import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type Props = {};
export default class Jump extends Component<Props> {
    render() {

        return (
            <View >
                <Text >
                    当前定位的城市
                </Text>
            </View>
        );
    }
}