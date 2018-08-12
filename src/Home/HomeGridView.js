/**
 * @flow
 */

 import React, {Component} from 'react'
 import {StyleSheet, View, Image, Text,ScrollView} from 'react-native'
 import PageControl from 'react-native-page-control'
 import Color from '../ui/Color'
 import screen from '../common/screen'
 import HomeGridItem from './HomeGridItem'
 
 type Props = {
     infos: Array<Object>
 }
 type State = {
     currentFavPage:number,
 }

 class HomeGridView extends Component<Props,State>{
    constructor(props:Object){
        super(props)
        this.state={
            currentFavPage:0,
        }
    }
     render(){
         const {infos} = this.props
         const pageCount = Math.ceil(infos.length/2)
         const favElements = infos.map((info,index) =>{
             return(
                 <HomeGridItem
                    key={index}
                    info={info}
                 />
             )
         })
         let favViews =[]

         for (let i=0; i<pageCount; i++){
             favViewPerPage = favElements.slice(i*2,i*2+2);
             let favView = (
                <View 
                    key={i}
                >
                {favViewPerPage}
                </View>
             )
             favViews.push(favViewPerPage)
         }
         return(
            <View style={styles.container}>
                <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={this.onScroll}
                >
                {favViews}
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentFavPage}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={Color.primary}
                />
            </View>
         )
     }
     onScroll = (e) => {
         console.log("HomeGridView onScroll");
        const x = e.nativeEvent.contentOffset.x
        const currentPage = Math.round(x/screen.width)
        if( currentPage != this.state.currentFavPage ){
            this.setState({currentFavPage:currentPage})
        }
    }
 }

 const styles = StyleSheet.create({
    gridContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: Color.bodar,
    },
    pageControl:{
        margin: 10,
    },
 })

 export default HomeGridView