import React from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';

export const Dashboard = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text style={styles.title}>Dashboard</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Masukkan teks di sini"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan teks di sini"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan teks di sini"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan teks di sini"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
export default Dashboard;
