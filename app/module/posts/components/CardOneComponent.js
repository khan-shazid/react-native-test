import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import LogoComponent from './LogoComponent';
import CustomText from './TextComponent';
import CustomImage from './ImageComponent';
import { card1 } from '../styles';
// import CustomViewComponent from './CustomViewComponent';

// import { WIDTH } from '../../../configuration/Values';
// import { BASE_COLOR_BACKGROUND, TITLE_COLOR } from '../../../configuration/Colors';

type Props = {};
const CardOneComponent = (props) => {
    const { item,index } = props;
    // console.warn(BASE_COLOR);
    return (
      <View style={card1.cardContainer}>
        <View style={card1.cardUpperRow}>
          <View style={card1.id}>
            <LogoComponent name="arrow_up" />
            <CustomText name="idText" text={index.toString()} />
            <LogoComponent name="arrow_down" />
          </View>
          <CustomImage name="cardOneImage" url={item.image_url} />
          <View style={card1.txtContainer}>
            <CustomText name="title" text={item.title} />
            <CustomText name="desc" lineLimit="3" text={item.description} />
          </View>
          <LogoComponent name="settings" />
        </View>
        <View style={card1.cardLowerRow}>
          <View style={card1.lowerRowEmptyView}></View>
          <CustomText name="timeText" text="18 seconds ago" />
          <View style={card1.lowerRowLogoContainer}>
            <LogoComponent name="comment" />
            <LogoComponent name="badge" />
          </View>
        </View>
      </View>
    );
}

export default CardOneComponent;
