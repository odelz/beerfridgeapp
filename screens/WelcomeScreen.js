import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

const WelcomeScreen = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '924019040759-bdsisde057osb4lc1s45gc9i7ufa4sik.apps.googleusercontent.com',
    },
  );
  
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Welcome to the beer fridge app</Text>
      <View style={styles.buttons}>
        <Button title="Log in with Google" buttonStyle={styles.button} onPress={() => {
        promptAsync();
      }} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});

export default WelcomeScreen;

// const WelcomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the beer fridge app</Text>
//       <Button
//         title="Please enter the units of soda you have taken this month"
//         onPress={storeAmountTaken("odelia", 20)}
//       />
//     </View>
//   )
// }

// export default WelcomeScreen