import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import { SignupScreen } from './src/Screens';

const HomeScreenNavigator = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <HomeScreenNavigator.Navigator initialRouteName="Sign In">
          <HomeScreenNavigator.Screen name="Sign In" component={SignupScreen} />
        </HomeScreenNavigator.Navigator>

      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;