import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import md5 from 'js-md5'
import Heroi from './heroi'

const PUBLIC_KEY = '6a9f7ad2bd8d09e2026a507fe68730ae'
const PRIVATE_KEY = '0ef7be6353203aba74a7aad9eba59806791fc0b2'

class Herois extends React.PureComponent {
    static navigationOptions = {
        title: 'Heroes'
    }
    
    state = {
        data: []
    }
    
    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({data: responseJson.data.results})
    }

    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Heroi', {hero: item})} style={styles.toutch}>
                <Image style={styles.image} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                <Text style={styles.titulo}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={styles.list}
                />}
            />
        )
    }
}

const styles = StyleSheet.create({
    toutch: {
        flexDirection:'row', 
        padding: 10, 
        alignItems:'center'
    },
    image: {
      height: 50, 
      width: 50, 
      borderRadius: 5
    },
    titulo: {
        marginLeft: 15,
        fontWeight: 'bold',
        color: '#000759'
    },
    list: {
        backgroundColor: '#e23636',
        height: 1
    }
});

export default Herois;