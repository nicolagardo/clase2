import React from 'react'
import {View, Text, Button} from 'react-native'

export default function FourthScreen({navigation}) {
  goHome = () => {
    //console.log('Test')
    navigation.navigate('HomeScreen')
}

  return (
    <View>
      <Button title='Volver al Home' onPress = {() => goHome()}/>

      <Text style={{marginTop: 150, fontSize: 30, textAlign: 'center'}}>
        Estas en la cuarta pagina
      </Text>

    </View>
)
}
