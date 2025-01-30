import React from 'react';
import {Image, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

function CarouselListItem({image}) {
  return (
    <View style={{width: screenWidth}}>
      <Image
        resizeMode="contain"
        style={{height: '100%'}}
        source={{uri: image}}
      />
    </View>
  );
}
export default CarouselListItem;
