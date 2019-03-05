import React, {Component} from 'react';
import {Image} from 'react-native';

import imageStylesWrapper from '../HOC/imageStylesWrapper';


const CustomImage = (props) => {
    return (
        <Image
          style={props.styles}
          source={{ uri: props.url }}
           />
    )
}

export default imageStylesWrapper(CustomImage);
