import {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {AxiosUnsplashInstance} from '../../../api/api';
import ForYouImageCard from '../../../components/cards/ForYouImageCard';

const Suggested = () => {
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
    <View style={{flex: 1}}>
      <FlatList
        data={pexelsImages}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({item}) => <ForYouImageCard key={item.id} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
});

export default Suggested;
