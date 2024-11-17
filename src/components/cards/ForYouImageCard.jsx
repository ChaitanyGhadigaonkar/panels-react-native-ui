import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ForYouImageCard = ({item, setBottomSheetOpen}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        setBottomSheetOpen(true);
      }}>
      <Image source={{uri: item.urls.regular}} style={styles.image} />

      <View style={styles.bottomSection}>
        <Text numberOfLines={1} style={{color: 'white'}}>
          {item.description ? item.description : 'Description Unavailable'}
        </Text>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialIcon
            name={isFavorite ? 'favorite' : 'favorite-outline'}
            size={20}
            style={{color: '#FF007F'}}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
export default ForYouImageCard;
