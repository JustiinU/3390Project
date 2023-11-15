import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterScreen = ( { navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('username, email, password');
    };

  return (
    <View style={styles.screen}>
    <View style={styles.container}>
      <Icon name="movie" size={110} color="#000" style={styles.iconMovie}/>
        <View style={styles.headerContainer}>
        <Text style = {styles.headerText}>
            Register
        </Text>
        </View>
        <Text style={styles.label}>Create Username</Text>
        <View style={styles.icon}>
          <Icon name="person" size={23} color="#000" />
          <TextInput
              style={styles.input}
              placeholder=" Create Username"
              onChangeText={setUsername}
              value={username} />
        </View>
        <Text style={styles.label}>Enter Email</Text>
        <View style={styles.icon}>
          <Icon name="mail" size={21} color="#000" />
          <TextInput
              style={styles.input}
              placeholder=" Email-Address"
              onChangeText={setEmail}
              value={email} 
              keyboardType = "email-address"/>
        </View>
        <Text style={styles.label}>Create Password</Text>
        <View style={styles.icon}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput
              style={styles.input}
              placeholder="Create Password"
              secureTextEntry={true} // Hides the password
              onChangeText={setPassword}
              value={password} />
        </View>
        <TouchableOpacity style={styles.accountButton} onPress = {handleCreateAccount}>
            <Text 
                style={styles.accountText}> CREATE ACCOUNT
            </Text> 
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    marginTop: 10,
  },

  iconMovie: {
    marginBottom: 15,
  },

  headerContainer: {
    marginBottom: 25,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
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

  accountButton: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  accountText: {
    color: 'white',

  },

});

export default RegisterScreen;
