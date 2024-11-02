import {useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import LottieView from 'lottie-react-native';

import ForYouImageCard from '../../../components/cards/ForYouImageCard';
import {AxiosUnsplashInstance} from '../../../api/api';

const Liked = () => {
  const [pexelsImages, setPexelsImages] = useState([]);

  const getPexelsData = async () => {
    try {
      const res = await AxiosUnsplashInstance.get(
        `/search/photos?query=mobile wallpapers&page=1`,
      );
      const data = await res.data.results;
      setPexelsImages(data);
    } catch (error) {
      setPexelsImages([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getPexelsData();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      {/* animation when user don't have favorite wallpapers */}
      <View style={styles.top}>
        <Text style={styles.topBottomText}>No Favorite Found.</Text>
        <LottieView
          source={require('../../../assets/Lottie/favoriteLottie.json')}
          style={{width: 400, height: 250}}
          autoPlay
          loop
        />
        <Text style={styles.topBottomText}>
          (wallpapers you "like" will appear here.)
        </Text>
      </View>
      <Text style={styles.heading}>Suggestions for you</Text>
      <FlatList
        data={pexelsImages}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({item}) => <ForYouImageCard key={item.id} item={item} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
  top: {
    marginVertical: 32,
    alignItems: 'center',
    gap: 10,
  },
  topTopText: {
    fontSize: 18,
    textAlign: 'center',
  },
  topBottomText: {
    textAlign: 'center',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
});
export default Liked;
