/**
 * @flow
 */

import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView
} from 'react-native'
 import {
     connect
 } from "react-redux";
 import HomeMenuView from "../Home/HomeMenuView"
 import HomeGridView from "../Home/HomeGridView"
 import SpaceView from "../ui/SpaceView";
 import * as api from "../API/api";
 import Color from "../ui/Color";

type Props = {

}
type State = {

}

class NearBySence extends PureComponent<Props,State>{
    static navigationOptions = ({ navigation }) => {
        return{
            headerStyle: {
                backgroundColor: Color.primary
            },
            headerTitle:"NearBySence",
        }
    }
    render(){
        return(
              < View style = {{flex: 1,flexDirection: "row"}}>
                <SpaceView/>
                {this.props.fetchInfoData &&
                    <HomeGridView
                    infos = {this.props.fetchInfoData}
                    numPerPage={10}
                    />}
                <SpaceView/>
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
 const mapStateToProps = state => ({
     fetchInfoData: state.payload
 })
 export default connect(mapStateToProps)(NearBySence);