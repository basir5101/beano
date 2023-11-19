import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';

const HomeScreenNavigator = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <HomeScreenNavigator.Navigator initialRouteName="Home">
          <HomeScreenNavigator.Screen name="Home" component={HomeScreen} />
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
