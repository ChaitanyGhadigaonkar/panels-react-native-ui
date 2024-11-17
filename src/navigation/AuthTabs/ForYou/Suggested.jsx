import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {AxiosUnsplashInstance} from '../../../api/api';
import ForYouImageCard from '../../../components/cards/ForYouImageCard';
import BottomSheet from '../../../components/BottomSheet';
import ThemeTypography from '../../../components/theme/ThemeTypography';

const Suggested = () => {
  const [pexelsImages, setPexelsImages] = useState([]);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

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
        renderItem={({item}) => (
          <ForYouImageCard
            key={item.id}
            item={item}
            setBottomSheetOpen={setBottomSheetOpen}
          />
        )}
      />

      {bottomSheetOpen && (
        <BottomSheet
          key={2}
          height="100%"
          isOpen={bottomSheetOpen}
          setIsOpen={setBottomSheetOpen}>
          <View style={{flex: 1}}>
            <ThemeTypography>Hello Bottom Sheet</ThemeTypography>
          </View>
        </BottomSheet>
      )}
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
