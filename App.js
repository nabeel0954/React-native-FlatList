import React, { Component } from 'react';
import { View, StyleSheet, Image,FlatList,TouchableOpacity, Text, BackgroundImage } from 'react-native';

const items = [
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_960_720.jpg' } },
  { thumbnail: { uri: 'https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_960_720.jpg' } },
];

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',paddingTop:50}}>
      
    <FlatList
    data={items}
    renderItem={({item})=>{
    return(
     <TouchableOpacity onPress={() => {}}>
    <Image style={{width: 370, height: 300,margin:6,}}
    source={{uri: item.thumbnail.uri }}/>
    </TouchableOpacity >
    )
    }}/>
    </View>
    
    );
}
}