import React from 'react';
import {View, Text, Button} from 'react-native';

export default function SecondScreen({navigation}) {
  goHome = () => {
    console.log('Test');
    navigation.navigate('HomeScreen');
  };
  TerceraScreen = () => {
    //console.log('Test')
    navigation.navigate('ThirdScreen');
  };
  return (
    <View>
      <Button title="Volver al Home" onPress={() => goHome()} />

      <Text style={{marginTop: 150, fontSize: 30, textAlign: 'center'}}>
        Second Home
      </Text>
      
      <Button title="Tercera Pagina " onPress={() => TerceraScreen()} />
    </View>
  );
}
