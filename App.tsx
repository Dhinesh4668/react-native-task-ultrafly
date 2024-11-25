import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './app/navigation/root';
import CreateScreen from './app/CreateScreen/CreateScreen';
import SplashSCreen from './app/SplashScreen/SplashSCreen';
import LoginScreen from './app/LoginScreen/LoginScreen';


const StackNAvigation = createNativeStackNavigator();

const App = () => {
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  // load splash screen
  if (splash) {
    return (
      <SplashSCreen />
    );
  }
  return (
    <NavigationContainer>
      <StackNAvigation.Navigator initialRouteName='login' screenOptions={{
        headerShown: false
      }}>
        <StackNAvigation.Screen name="List" component={BottomTabNavigation} />
        <StackNAvigation.Screen name="CreateScreen" component={CreateScreen} />
        <StackNAvigation.Screen name="login" component={LoginScreen} />
      </StackNAvigation.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})