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
     infos: Array<Object>,
     numPerPage?: number,
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
        const {infos, numPerPage} = this.props;
        const perPage = numPerPage ? numPerPage : 4;
        const pageCount = Math.ceil(infos.length / perPage)
        const favElements = infos.map((info,index) =>{
            return(
               <HomeGridItem
                  key={index}
                  info={info}
                />
            )}
        )

         let favViews =[]
         for (let i=0; i<pageCount; i++){
             let favViewPerPage = favElements.slice(i * perPage, i * perPage + perPage);
             let favView = (
                <View key={i}
                    style={styles.itemsView}>
                    {favViewPerPage}
                </View>
             )
             favViews.push(favView);
         }
        return(
            <View style={styles.container}>
                <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={this.onScroll}>
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
    container:{
        backgroundColor:'white',
    },
    itemsView:{
        flexDirection: 'row',
        width:screen.width,
        flexWrap:'wrap'
    },
 })

 export default HomeGridView