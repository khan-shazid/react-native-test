import React from 'react';
import {text} from '../styles';


const translateProps = (props) => {
    // console.warn(JSON.stringify(s.commentLogo))
    let _styles = {...text.default}
    let limit = 1000;
    _styles = {..._styles, ...text[props.name]};
    if(props.lineLimit){
      limit = props.lineLimit;
    }
    const newProps = {...props,styles:_styles,lineLimit:limit}
    return newProps;
}


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}
