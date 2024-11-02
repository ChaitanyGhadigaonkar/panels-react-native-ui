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
  box: {
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 12,
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 260,
  },
  bottomSection: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 48,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  bottomSectionText: {
    width: '60%',
    fontWeight: '800',
    fontSize: 12,
  },
});

export default Suggested;
