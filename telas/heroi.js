import React from 'react'
import { ScrollView, Image, Dimensions, Text, StyleSheet, View } from 'react-native'

function Heroi({route}){
    const hero = route.params.hero;
    return(
        <ScrollView contentContainerStyle={styles.ScrollView} >
            <View style={styles.view}>
                <Image 
                    source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                    style={styles.image}
                />
                <Text style={styles.titulo}>{hero.name}</Text>
                <Text style={styles.descri}>{hero.description}</Text>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "center", 
        alignItems: "center",
    },
    ScrollView:{
        justifyContent: "center"
    },
    image: {
      width: 350,
      height: 350,
      marginTop: 35,
      borderRadius: 15,
      flex: 1,
      justifyContent: "center",
      borderColor: '#e23636',
      borderWidth: 3
    },
    titulo:{
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    descri:{
        padding:10,
        textAlign: 'justify'
        
    }
  });

export default Heroi;