import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, FlatList} from 'react-native';

import CardOneComponent from './CardOneComponent';
import CardTwoComponent from './CardTwoComponent';
import LogoComponent from './LogoComponent';
import CustomText from './TextComponent';
import CustomImage from './ImageComponent';
import {s2} from '../styles';
// import CustomViewComponent from './CustomViewComponent';

import { WIDTH, MOCK_DATA_2 } from '../../../configuration/Values';
import { BASE_COLOR_BACKGROUND, TITLE_COLOR } from '../../../configuration/Colors';

type Props = {};
export default class HoriZontalComponent extends Component<Props> {
  constructor(){
    super();
    this.state = {
      data: [],
      page: 1,
      limit:10,
    }
  }
  componentDidMount(){
    this.makeRemoteRequestHorizontal();
  }

  makeRemoteRequestHorizontal = () => {
    const { page } = this.state;
    //after fetching the data
    this.setState({
      data:page === 1 ? MOCK_DATA_2 : [...this.state.data, ...MOCK_DATA_2]
    });
  }

  loadMoreCardTwo = () => {
    this.setState(
      {
        page: this.state.page + 1
      },() => {
        this.makeRemoteRequestHorizontal();
      });
  }

  render(){
    return (
      <View style={s2.container}>
        <CardOneComponent  item={this.props.item} index={this.props.index} />
        <CustomText name="txtDiscover" text="Discover" />
        <FlatList
          contentContainerStyle={s2.flatList2}
          data={this.state.data}
          extraData={this.state}
          renderItem={({ item , index }) =>index==0?
          ( <CardTwoComponent item={item} index={index} name="leftMostCard" />) :
          ( <CardTwoComponent item={item} index={index} name="default" />)}
          horizontal={true}
          removeClippedSubviews={true}
          initialNumToRender={20}
          windowSize={50}
          keyExtractor={(item,index) => index.toString()}
          onEndReached={this.loadMoreCardTwo}
          onEndReachedThreshold={.1}
         />
        <View style={s2.emptyView}>
        </View>
      </View>
    );
  }
}
