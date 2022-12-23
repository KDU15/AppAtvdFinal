import React from 'react'
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Herois from './herois';
import Heroi from './heroi';

function Home({navigation}){
    return(
        <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
          <View>
              <Text style={styles.text}>CARLOS EDUARDO</Text>
              <TouchableOpacity style={styles.botao} color="#F20519" title='ENTRAR' onPress={() => navigation.navigate('Herois')}>
                <Text style={styles.botaotext}>ENTRAR</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    text:{
      fontSize: 30,
      fontWeight: '900',
      color: '#fff',
      backgroundColor: '#023859',
      opacity: 0.6,
      borderRadius: 20,
      padding: 10,
      marginBottom: 130
    },
    botao:{
      backgroundColor: '#F20505',
      alignItems: 'center',
      paddingVertical: 20,
      borderRadius: 15,
    },
    botaotext:{
      fontSize: 20,
      fontWeight: '900',
      color: '#fff'

    }

});

export default Home;