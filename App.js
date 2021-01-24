import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import ProgressBarComponent from './assets/Components/ProgressBarComponent';
import RegistrationComponent from './assets/Components/RegistrationComponent';
import QRCodeComponent from './assets/Components/QRCodeComponent';


import Navigator from './assets/Routes/RouteStack'

export default function App() {
  return (
    <Navigator />
  );
}

