/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';

import CardOneComponent from '../components/CardOneComponent';
import HorizontalComponent from '../components/HorizontalComponent';

import { WIDTH, MOCK_DATA } from '../../../configuration/Values';
import { BASE_COLOR_BACKGROUND } from '../../../configuration/Colors';

type Props = {};
export default class PostListContainer extends Component<Props> {
  static navigationOptions = {
  header: null,
  };

  constructor(){
    super();
    this.state = {
      data: [],
      page: 1,
      limit:10,
      dataHorizontal:[],
      pageHorizontal:1,
      loading:false
    }
  }

  componentDidMount(){
    this.makeRemoteRequest();
  }
  componentWillUnmount(){
    // if(this.timerLoader){
    //   clearTimeout(this.loaderTimer);      // ***
    // }
  }
  makeRemoteRequest = () => {
    const { page } = this.state;
    //after fetching the data
    this.setState({
      data:page === 1 ? MOCK_DATA : [...this.state.data, ...MOCK_DATA]
      })
  }

  loadMoreCardOne = () => {
    // console.warn(this.state.page)
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  }

  render() {
    // console.warn(BASE_COLOR);
    return (
      <FlatList
        contentContainerStyle={s.flatList}
        data={this.state.data}
        extraData={this.state}
        renderItem={({ item,index }) => (index+1)%7==0 ? (
              <HorizontalComponent item={item} index={index} />
        ) : (
              <CardOneComponent item={item} index={index} />
        )}
        removeClippedSubviews={true}
        initialNumToRender={20}
        windowSize={50}
        keyExtractor={(item,index) => index.toString()}
        onEndReached={this.loadMoreCardOne}
        onEndReachedThreshold={.1}
      />
    );
  }
}

const s = StyleSheet.create({
  flatList:{
    flexGrow:1,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: BASE_COLOR_BACKGROUND
  }
});
