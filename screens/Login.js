import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useColorScheme} from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme(); // Get the current color scheme ('light' or 'dark')

  const handleLogin = () => {
    // Add your login logic here
    console.log(
      'Logging in with username:',
      username,
      'and password:',
      password,
    );
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: colorScheme === 'dark' ? 'white' : 'black'}, // Text color based on colorScheme
        ]}>
        Orel EV Solution
      </Text>
      <TextInput
        style={[
          styles.input,
          {color: colorScheme === 'dark' ? 'white' : 'black'}, // Text color based on colorScheme
        ]}
        placeholderTextColor={colorScheme === 'dark' ? 'white' : 'gray'} // Set placeholder text color
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[
          styles.input,
          {color: colorScheme === 'dark' ? 'white' : 'black'}, // Text color based on colorScheme
        ]}
        placeholderTextColor={colorScheme === 'dark' ? 'white' : 'gray'} // Set placeholder text color
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="              Login              "
        onPress={handleLogin}
        color="blue" // Set the button background color to blue
        titleStyle={{color: 'white'}} // Set the text color to white
      />
      <Text
        style={[styles.forgotPassword, {color: 'blue'}]}
        onPress={handleForgotPassword}>
        Forgot Password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 130, // Adjusted the marginBottom for better layout
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 30,
    paddingLeft: 10,
  },
  forgotPassword: {
    marginTop: 50,
  },
});

export default Login;
