import {Text, useColorScheme} from 'react-native';

const ThemeTypography = ({children, style, ...props}) => {
  const theme = useColorScheme();

  return (
    <Text
      style={[{color: theme === 'light' ? '#222831' : '#EEEEEE'}, style]}
      {...props}>
      {children}
    </Text>
  );
};

export default ThemeTypography;
