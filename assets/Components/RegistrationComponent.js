import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import { Button } from 'react-native-elements';

const RegistrationComponent = ({navigation}) => {
   const [name, setName]=useState('kevlyn');
   const [phone,setPhone]=useState('993028292');

   return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.container}>
         <Text> REGISTRATION:</Text>
         <Text>  </Text>
         <Text> Enter name :</Text>
         <TextInput
         style={styles.input}
         placeholder='eg kevlyn'
         onChangeText={(val) =>setName(val)} />

         <Text> Enter phone number :</Text>
         <TextInput
         style={styles.input}
         placeholder='eg 993028292'
         onChangeText={(val) =>setPhone(val)} />
         
         {/* <Text> name: {name}, phone:{phone}</Text> */}
         
         <Text style={{marginTop: 60}}>Submit to generate QR code for checking-in</Text>
         <Button style={{marginTop: 20}} title="Submit" onPress={navToQRCodePage} />
         
         </View>
      </TouchableWithoutFeedback>
   );
}

const navToQRCodePage = () => {
   navigation.navigate('QRCodePage')
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#fff",
      alignItems: 'center',
      justifyContent :'center',
   },
   input: {
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding:8,
      margin:10,
      width:200,
   }
   
});

export default RegistrationComponent
