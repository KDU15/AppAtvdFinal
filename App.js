import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Herois from './telas/herois';
import Heroi from './telas/heroi';
import Home from './telas/home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Marvel API" component={Home} />
        <Stack.Screen name="Herois" component={Herois} />
        <Stack.Screen name="Heroi" component={Heroi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
