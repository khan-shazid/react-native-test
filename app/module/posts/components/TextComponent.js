import React, {Component} from 'react';
import {Text} from 'react-native';

import textStylesWrapper from '../HOC/textStylesWrapper';


const CustomText = (props) => {
    return (
        <Text style={props.styles} numberOfLines={parseInt(props.lineLimit)}>{props.text}</Text>
    )
}

export default textStylesWrapper(CustomText);
