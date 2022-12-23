import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Herois from './herois';
import Heroi from './heroi';

const Stack = createStackNavigator();

const image = { uri: "https://reactjs.org/logo-og.png" };

function Home({navigation}){
    return(
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
            <Text>Tome</Text>
            <Button title='Herois' onPress={() => navigation.navigate('Herois')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    }
  });

export default Home;