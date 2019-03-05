import React from 'react';
import {logo} from '../styles';


const translateProps = (props) => {
    // console.warn(JSON.stringify(s.commentLogo))
    let _styles = {...logo.default}
    if(props.name=='comment'){
        _styles = {..._styles, ...logo.commentLogo};
    }else if(props.name=='badge'){
        _styles = {..._styles, ...logo.badgeLogo};
    }else if(props.name=='arrow_up' || props.name=='arrow_down'){
        _styles = {..._styles, ...logo.arrowLogo};
    }else if(props.name=='settings'){
        _styles = {..._styles, ...logo.settingsLogo};
    }
    const newProps = {...props,styles:_styles }
    return newProps;
}


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}
