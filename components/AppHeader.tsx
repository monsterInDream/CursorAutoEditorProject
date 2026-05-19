import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors, HermesBadge} from 'react-native/Libraries/NewAppScreen';

function AppHeader(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <HermesBadge />
      <Text style={styles.text}>
        Welcome to
        {'\n'}
        React Native
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});

export default AppHeader;
