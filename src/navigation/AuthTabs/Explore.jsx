import {Button, Text, View} from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import ThemeTypography from '../../components/theme/ThemeTypography';
import {useState} from 'react';

const ExploreTab = ({navigation}) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const BottomSheetComponent = ({closeBottomSheet}) => {
    return (
      <View>
        <ThemeTypography>Bottom Sheet</ThemeTypography>
        <Button
          title="close"
          onPress={() => {
            closeBottomSheet();
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setShowBottomSheet(true)}
      />
      {showBottomSheet && (
        <BottomSheet
          navigation={navigation}
          isOpen={showBottomSheet}
          setIsOpen={setShowBottomSheet}>
          <BottomSheetComponent />
        </BottomSheet>
      )}
    </View>
  );
};

export default ExploreTab;
