import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ThemeTypography from './theme/ThemeTypography';
import ProfileImage from '../assets/profile.jpg';

const ProductDetailBottomSheet = ({
  selectedProduct,
  setSelectedProduct,
  closeBottomSheet,
}) => {
  const theme = useColorScheme();
  if (!selectedProduct) {
    return;
  }
  return (
    <View style={styles.container}>
      <View style={styles.actionButtonsSection}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            closeBottomSheet();
            setTimeout(() => {
              setSelectedProduct(null);
            }, 800);
          }}>
          <MaterialIcons name="close" style={{fontSize: 28, color: 'white'}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 8}}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialIcons
              name="favorite-border"
              style={{fontSize: 22, color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome6 name="share" style={{fontSize: 22, color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.top}>
        <ImageBackground
          source={{uri: selectedProduct?.urls?.full}}
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <ThemeTypography style={styles.title} numberOfLines={1}>
          {selectedProduct?.alt_description}
        </ThemeTypography>

        <TouchableOpacity
          style={[
            {backgroundColor: theme !== 'dark' ? '#222831' : '#EEEEEE'},
            styles.mainButton,
          ]}>
          <FeatherIcon
            name="image"
            style={[
              {color: theme !== 'light' ? '#222831' : '#EEEEEE'},
              styles.mainButtonIcon,
            ]}
          />
          <Text
            style={[
              {color: theme !== 'light' ? '#222831' : '#EEEEEE'},
              styles.mainButtonText,
            ]}>
            Get Wallpaper
          </Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.authorView}>
            <Image source={ProfileImage} style={styles.authorImage} />
            <ThemeTypography style={styles.authorName}>
              Jhon Doe
            </ThemeTypography>
          </TouchableOpacity>

          <View style={styles.imageOptionsView}>
            <View style={styles.imageOption}>
              <FeatherIcon name="image" style={styles.imageOptionIcon} />
              <ThemeTypography style={styles.imageOptionText}>
                Photography
              </ThemeTypography>
            </View>
            <View style={styles.imageOption}>
              <FeatherIcon name="info" style={styles.imageOptionIcon} />
              <ThemeTypography style={styles.imageOptionText}>
                Full-Res . 4000 x 3000
              </ThemeTypography>
            </View>
            <View style={styles.imageOption}>
              <FeatherIcon name="info" style={styles.imageOptionIcon} />
              <ThemeTypography style={styles.imageOptionText}>
                HD . 1080 x 1920
              </ThemeTypography>
            </View>
            <View style={styles.imageOption}>
              <MaterialIcons name="copyright" style={styles.imageOptionIcon} />
              <ThemeTypography style={styles.imageOptionText}>
                Copyright 2024
              </ThemeTypography>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '60%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
  actionButtonsSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    width: '100%',
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottom: {
    height: '40%',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  mainButton: {
    borderColor: 'black',
    width: '70%',
    borderWidth: 2,
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  mainButtonIcon: {
    fontSize: 28,
    fontWeight: 'heavy',
  },
  mainButtonText: {
    fontSize: 22,
    fontWeight: '600',
  },
  authorView: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageOptionsView: {
    paddingHorizontal: 12,
  },
  imageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: 4,
  },
  imageOptionIcon: {
    fontSize: 20,
    fontWeight: '600',
  },
  imageOPtionText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default ProductDetailBottomSheet;
