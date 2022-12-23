import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text, View } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width

const Heroi = ({route}) => {
    const hero = route.params.hero;
    console.log(route.params.hero)
    return(
        <ScrollView>
            <Image 
                source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
            />
            <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
            <Text style={{padding:10}}>{hero.description}</Text>
        </ScrollView> 
    )
}

export default Heroi;