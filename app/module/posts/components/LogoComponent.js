import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import logoStylesWrapper from '../HOC/logoStylesWrapper';
import { LOGO_LIST } from '../../../configuration/Values';


const Logo = (props) => {
    return (
        <Image
          source={LOGO_LIST[props.name]}
          style={props.styles}
         />
    )
}

export default logoStylesWrapper(Logo);
