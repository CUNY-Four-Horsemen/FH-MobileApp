import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProgressBarComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom : 20}}>Time Remaining</Text>

        <AnimatedCircularProgress
          size={220}
          width={15}
          fill
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text>
                3 mins
              </Text>
            )
          }
        </AnimatedCircularProgress>
        
        <Button style={{marginTop: 20}} title="Businesses Near Me" />
        <Button style={{marginTop: 20}} title="Cancel Appointment" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default ProgressBarComponent;