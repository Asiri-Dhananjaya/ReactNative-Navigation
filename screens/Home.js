import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  //create Navigation object
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.Text}>This is home screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //call from here
            Navigation.navigate('Intro');
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#06061a',
    padding: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
