import React from 'react';
import {image} from '../styles';


const translateProps = (props) => {
    // console.warn(JSON.stringify(s.commentLogo))
    let _styles = {...image.default}
    _styles = {..._styles, ...image[props.name]};
    
    const newProps = {...props,styles:_styles}
    return newProps;
}


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}
