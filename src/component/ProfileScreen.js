import React                    from 'react';
import {Text, View, StyleSheet} from "react-native";
import color                    from "./Color"
import RNAndroidInfo            from "../plugin/RNAndroidInfo";

export default class ProfileScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            osVersioon:"",
            osSdk:16,
            osProduct:""
        }
    }

    componentDidMount(){
        RNAndroidInfo.getOSVersion((version)=>{
            console.log("sdk info %j",version);
            this.setState({
                osVersion:version
            })
        },
            (error)=>{
                console.log("error info %j",error)
            }
        );
        RNAndroidInfo.getOSSDKVersion((sdk)=>{
            console.log("sdk info %j",sdk);
                this.setState({
                    osSdk:sdk
                })
            },
            (error)=>{
                console.log("error info %j",error)
        });
        RNAndroidInfo.getProduct((product)=>{
            this.setState({
                osProduct:product
            })
            },
            (error)=>{
                console.log("error info %j",error)
            });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    This is ProfileScreen,version={this.state.osVersioon},sdk={this.state.osSdk}, product={this.state.osProduct}
                </Text>
            </View>
        );
    }

    getOSVersion(){

    }
}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.background,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:30
        }
    }
);