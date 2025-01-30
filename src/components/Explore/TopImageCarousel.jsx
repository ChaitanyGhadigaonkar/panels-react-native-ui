import React, {useRef} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import CarouselListItem from '../CarouselListItem';

const IMAGES = [
  'https://images.pexels.com/photos/15723656/pexels-photo-15723656/free-photo-of-a-tall-building-with-a-tower-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://www.pexels.com/photo/a-building-with-a-palm-tree-in-the-middle-of-it-15723780/',
  'https://images.pexels.com/photos/15699937/pexels-photo-15699937/free-photo-of-a-tall-building-with-a-large-window-and-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/15710310/pexels-photo-15710310/free-photo-of-a-view-of-tall-buildings-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const screenWidth = Dimensions.get('window').width;

const TopImageCarousel = () => {
  const flatListRef = useRef();
  const indexRef = useRef();

  const onScroll = event => {
    const ind = event.nativeEvent.contentOffset.x / screenWidth;
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex; // update indexRef when flatList is scrolled
  };
  return (
    <View style={{height: 250}}>
      <FlatList
        ref={flatListRef}
        data={IMAGES}
        keyExtractor={(item, index) => index}
        renderItem={data => <CarouselListItem image={data.item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        initialNumToRender={0}
      />
    </View>
  );
};

export default TopImageCarousel;
