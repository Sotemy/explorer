import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <>
    {/* <StatusBar style="dark" /> */}
      <Navigation />

      <View style={styles.container}>
        <Login />
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
