import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {

  SegundaScreen = () => {
    //console.log('Voy a la segunada pantalla')
    navigation.navigate('SecondScreen')
  }
  return (
    <View>
      <Text style={{marginTop: 150, fontSize: 30, textAlign: 'center'}}>Pantalla Home</Text>
      <Button title="Segunda pagina" onPress = {() => SegundaScreen()} />
    </View>
  );
}