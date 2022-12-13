import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// Import the functions you need from the SDKs you need
import './firebaseConfig';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Inventory" component={Inventory} />
        <Tab.Screen name="Admin" component={Admin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function Inventory({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Inventory page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
function Admin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Admin page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
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
