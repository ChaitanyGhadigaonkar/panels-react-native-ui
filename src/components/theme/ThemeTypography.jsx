import {Text, useColorScheme} from 'react-native';

const ThemeTypography = ({children, style}) => {
  const theme = useColorScheme();

  return (
    <Text style={[{color: theme === 'light' ? '#222831' : '#EEEEEE'}, style]}>
      {children}
    </Text>
  );
};

export default ThemeTypography;
