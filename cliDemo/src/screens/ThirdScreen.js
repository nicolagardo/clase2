import React from 'react'
import {View, Text, Button} from 'react-native'

export default function ThirdScreen({navigation}) {
    goHome = ()=>{
        console.log('Test')
        navigation.navigate('HomeScreen')
    }
    goToFourthScreen = () =>{
        console.log('Test a la 4')
        navigation.navigate('FourthScreen')
    }
    return (
        <View>
      <Button title='Volver al Home' onPress = {() => goHome()}/>
      <Text style={{marginTop: 150, fontSize: 30, textAlign: 'center'}}>Estas en la tercera pagina</Text>
      <Button title='Cuarta Pagina' onPress = {() => goToFourthScreen()}/>

        </View>
    )
}
