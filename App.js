import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigations
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import HomeScreens from './src/screens/HomeScreens';
import DetailScreens from './src/screens/DetailScreens';
import ProfileScreen from './src/screens/ProfileScreens';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreens}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailScreens}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Posts"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
