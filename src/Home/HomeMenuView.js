/**
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image, Text,Dimensions, ScrollView} from 'react-native'
import PageControl from 'react-native-page-control'
import HomeMenuItem from './HomeMenuItem'
import screen from '../common/screen'
import Color from '../ui/Color'

type Props = {
    menuInfos:Array<Object>,
    onMenuSelect:Function,
}
type State = {
    currentPage:number,
}

class HomeMenuView extends React.Component<Props,State>{

    constructor(props:Object){
        super(props)
        this.state={
            currentPage:0,
        }
    }

    render(){
        let {menuInfos,onMenuSelect} = this.props
        let defaultPic = require('../img/home/icon_homepage_default.png');
        console.log("defaultPic = " +defaultPic);

        const pageCount = Math.ceil(menuInfos.length/10)
        let menuElements = menuInfos.map((info,index) =>{
            return(
             <HomeMenuItem
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={()=>{
                    onMenuSelect(index);
                   console.log("HomeMenuView onPress")
                }}
            />
            )
        })

        let menuViews=[]
        for(let i=0;i<pageCount;i++){
            let elementsPerPage = menuElements.slice(i*10,i*10+10)
            let menuView = (
                <View
                    key={i}
                    style={styles.itemsView}>
                    {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)
        }

        return(
            <View style={styles.container}>
                <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={this.onScroll}
                >
                {menuViews}
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={Color.primary}
                />
            </View>
        )
    }
    onScroll = (e) => {
        const x = e.nativeEvent.contentOffset.x
        const currentPage = Math.round(x/screen.width)
        if( currentPage != this.state.currentPage ){
            this.setState({currentPage:currentPage})
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    itemsView:{
        flexDirection: 'row',
        width:screen.width,
        flexWrap:'wrap'
    },
    pageControl:{
        margin: 10,
    },
});
export default HomeMenuView