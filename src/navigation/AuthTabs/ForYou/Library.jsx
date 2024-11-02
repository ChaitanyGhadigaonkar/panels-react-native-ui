import LottieView from 'lottie-react-native';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';

const Library = () => {
  const theme = useColorScheme();
  return (
    <ScrollView style={{flex: 1}}>
      {/* animation when user don't have favorite wallpapers */}
      <View style={styles.top}>
        <Text style={[styles.topBottomText]}>No Favorite Found.</Text>
        <LottieView
          source={require('../../../assets/Lottie/favoriteLottie.json')}
          style={{width: 400, height: 200}}
          autoPlay
          loop
        />
        <Text style={styles.topBottomText}>
          (wallpapers you "like" will appear here.)
        </Text>
      </View>
      <Text style={styles.heading}>Suggestions for you</Text>
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
export default Library;
