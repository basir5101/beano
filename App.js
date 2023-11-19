import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import FeedScreen from './src/Screens/FeedScreen';
import OtpScreen from './src/Screens/OtpScreen';
import SignupScreen from './src/Screens/SignupScreen';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreenNavigator = createStackNavigator();

const ScreenList = ({ navigation }) => {
  const screens = [
    { name: 'Sign In', component: FeedScreen },
    { name: 'Categories', component: CategoriesScreen },
    { name: 'Home', component: HomeScreen },
    { name: 'Feed', component: FeedScreen },
    { name: 'OTP', component: OtpScreen },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToScreen(item)}>
      <Text style={styles.listItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const navigateToScreen = (screen) => {
    navigation.navigate(screen.name);
  };

  return (
    <ScrollView style={styles.container}>
      {/* FlatList to render the list of screens */}
      
      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </ScrollView>
  );
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      {/* Pass the navigation prop to the ScreenList component */}
      <HomeScreenNavigator.Navigator initialRouteName="List">
        <HomeScreenNavigator.Screen name="List" component={ScreenList} />
        <HomeScreenNavigator.Screen name="Sign In" component={SignupScreen} />
        <HomeScreenNavigator.Screen name="OTP" component={OtpScreen} />
        <HomeScreenNavigator.Screen name="Home" component={HomeScreen} />
        <HomeScreenNavigator.Screen name="Categories" component={CategoriesScreen} />
        <HomeScreenNavigator.Screen name="Feed" component={FeedScreen} />
      </HomeScreenNavigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', // Set the background color to a light color
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC', // Add a border color for separation
  },
  listItemText: {
    fontSize: 18,
    color: '#333333', // Set text color to a dark color
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC', 
  },
});

export default App;
