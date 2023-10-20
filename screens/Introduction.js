import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  useColorScheme,
} from 'react-native';

const IntroductionScreen = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'dark' ? styles.darkMode : styles.lightMode,
      ]}>
      <Image source={require('../image/carzz.png')} style={styles.image} />
      <Text
        style={[
          styles.description,
          colorScheme === 'dark'
            ? styles.darkDescription
            : styles.lightDescription,
        ]}>
        Our cutting-edge EV Solution App simplifies electric vehicle charging
        with seamless booking and easy station access.
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button
            title=" Sign Up  "
            containerStyle={styles.button}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={() => console.log('Sign Up button pressed')}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            title=" Log in "
            containerStyle={styles.button}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={() => console.log('Login button pressed')}
          />
        </View>
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightMode: {
    backgroundColor: 'white',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  image: {
    width: 350, // Adjust the width as needed
    height: 350, // Adjust the height as needed
    marginBottom: 20,
  },
  description: {
    fontSize: 20, // Change the font size as needed
    textAlign: 'center',
    marginBottom: 50,
  },
  lightDescription: {
    color: 'black',
  },
  darkDescription: {
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: 150, // Set a fixed width for the buttons
    height: 50, // Set a fixed height for the buttons
  },
  buttonStyle: {
    backgroundColor: 'blue',
  },
  buttonTitle: {
    color: 'white',
  },
});
