import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';
import ContactScreen from './components/screens/ContactScreen';

export type RootTabParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={{ marginRight: 15 }}
            >
              <Ionicons
                name={isDarkMode ? 'sunny' : 'moon'}
                size={24}
                color={isDarkMode ? 'white' : 'black'}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'mail' : 'mail-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: isDarkMode ? '#ffffff' : '#3C3D37',
          tabBarInactiveTintColor: isDarkMode ? '#888888' : '#000000',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}