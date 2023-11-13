import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
  };

  const handleRegister = () => {
    console.log('Go to register page');
  };

  const handleForgotPassword = () => {
    console.log('Go to forgot password page');
  };

  return (
    <View style={styles.container}>
      <Icon name="movie" size={110} color="#000" style={styles.iconMovie}/>
        <View style={styles.headerContainer}>
        <Text style = {styles.headerText}>
            Login
        </Text>
        </View>
        <Text style={styles.label}>Username</Text>
        <View style={styles.icon}>
          <Icon name="person" size={23} color="#000" />
          <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
              value={username} />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.icon}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true} // Hides the password
              onChangeText={setPassword}
              value={password} />
        </View>
        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}> Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress = {handleLogin}>
            <Text 
                style={styles.loginText}> LOGIN 
            </Text> 
        </TouchableOpacity>
         <TouchableOpacity style={styles.registerContainer} onPress={handleRegister}>
            <Text style={styles.accountText}>
                Don't have an account? 
                <Text style={styles.register}> Register</Text>
            </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  iconMovie: {
    marginBottom: 50,
  },

  headerContainer: {
    marginBottom: 20,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },

  icon: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#f2f2f2',
  },

  input: {
    flex: 1,
    padding: 10,
  },

  loginButton: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  loginText: {
    color: 'white',

  },

  forgotPassword: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    marginLeft: '60%',
  },

  forgotPasswordText: {
    fontWeight: 'bold',
  },

  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  accountText: {
    color: 'gray',    
  },

  register: {
    fontWeight: 'bold',
    color: 'black',
  },

});

export default LoginScreen;
