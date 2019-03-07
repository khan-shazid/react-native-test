import { StyleSheet } from 'react-native';

import { WIDTH } from '../../../configuration/Values';
import { BASE_COLOR_BACKGROUND, TITLE_COLOR, BASE_COLOR_BORDER } from '../../../configuration/Colors';

export const postList = StyleSheet.create({
  flatList:{
    flexGrow:1,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: BASE_COLOR_BACKGROUND
  }
});


export const card1 = StyleSheet.create({
  cardContainer:{
    backgroundColor: '#fff',
    width:'95%',
    alignSelf: 'center',
    borderBottomWidth:1,
    borderColor:BASE_COLOR_BORDER
    // marginTop:10
  },
  cardUpperRow:{
    flexDirection: 'row',
    alignItems:'center',
    paddingTop:20,
    minHeight:100
  },
  cardLowerRow:{
    flexDirection:'row',
    paddingTop:10,
    justifyContent:'space-between'
  },
  id:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  txtContainer:{
    flex:5,
    paddingLeft:10
  },
  lowerRowEmptyView:{
    flex:1
  },
  lowerRowLogoContainer:{
    flex:4,
    flexDirection:'row',
    justifyContent:'flex-end'
  }
});

export const s2 = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  flatList2:{
    backgroundColor: 'white'
  },
  emptyView:{
    width:'95%',
    height:20,
    backgroundColor: "white"
  }
});

export const card2 = StyleSheet.create({
  default:{
    width:WIDTH*.45,
    minHeight:WIDTH*.55,
    backgroundColor: '#6610f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5
  },
  leftMostCard:{
    width:WIDTH*.45,
    minHeight:WIDTH*.55,
    backgroundColor: '#6610f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:0,
    marginRight:5
  },
  rightMostCard:{
    width:WIDTH*.45,
    minHeight:WIDTH*.55,
    backgroundColor: '#6610f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:0
  },
  cardBackgroundWhite:{
    backgroundColor: 'white'
  },
  btnView:{
    width:'100%',
    borderTopWidth:1,
    borderColor: BASE_COLOR_BORDER,
    alignItems: 'center'
  }
});


export const logo = StyleSheet.create({
  default:{
  },
  commentLogo:{
    marginBottom:10,
    width:30,
    height:30
  },
  badgeLogo:{
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    width:30,
    height:30,
    borderRadius:50
  },
  arrowLogo:{
    height:15,
    width:15
  },
  settingsLogo:{
    flex:1,
    height:60
  }
});

export const text = StyleSheet.create({
  default:{

  },
  idText:{
    color:TITLE_COLOR
  },
  title:{
    color:TITLE_COLOR,
    fontSize:13,
    // fontWeight: 'bold'
  },
  desc:{
    color:'black',
    fontWeight:'bold',
    fontSize:15
  },
  timeText:{
    flex:5
  },
  txtDiscover:{
    padding:10,
    fontWeight:'bold',
    fontSize:18,
    color:'black',
    backgroundColor: 'white',
    width:'95%'
  },
  c2Title:{
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:20
  },
  c2Sub:{
    color:'white',
    paddingBottom:20
  },
  c2BtnTxt:{
    color:'white',
    fontSize: 16,
    padding:10,
    textAlign: 'center'
  },
  c2TitleBlack:{
    color:'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:20
  },
  c2SubBlack:{
    color:'black',
    paddingBottom:20
  },
  c2BtnTxtBlack:{
    color:'black',
    fontSize: 16,
    padding:10,
    textAlign: 'center'
  }
});

export const image = StyleSheet.create({
  default:{

  },
  cardOneImage:{
    flex:3,
    height:'100%'
  },
  cardTwoImage:{
    width:50,
    height:50,
    borderRadius: 50,
    marginTop:20
  }
});
