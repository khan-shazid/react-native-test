import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import cardStylesWrapper from '../HOC/cardStylesWrapper';

import LogoComponent from './LogoComponent';
import CustomText from './TextComponent';
import CustomImage from './ImageComponent';
import {card2} from '../styles';
// import CustomViewComponent from './CustomViewComponent';

import { WIDTH } from '../../../configuration/Values';
import { BASE_COLOR_BACKGROUND, TITLE_COLOR } from '../../../configuration/Colors';

type Props = {};
const CardTwoComponent = (props) => {
    const { item,index } = props;
    // console.warn(BASE_COLOR);
    return (
      <View style={props.styles} elevation={10}>
        <CustomImage name="cardTwoImage" url={item.image_url} />
        <CustomText name={index%2==0?"c2Title":"c2TitleBlack"} text={item.title} />
        <CustomText name={index%2==0?"c2Sub":"c2SubBlack"} text={item.member_num} />
        <TouchableOpacity style={card2.btnView}>
          <CustomText name={index%2==0?"c2BtnTxt":"c2BtnTxtBlack"} text="FOLLOW" />
        </TouchableOpacity>
      </View>
    );
}

export default cardStylesWrapper(CardTwoComponent);
