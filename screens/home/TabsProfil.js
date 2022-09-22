import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profil from './Profil';
import Explore from './Explore';
import Favorite from './Favorite';
import Ionic from 'react-native-vector-icons/Ionicons';
import Ticky from './Ticky';

const Tab = createBottomTabNavigator();
const TabsProfil = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
            colour = focused ? '#5766c7' : '#000';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'ios-search-outline';
            size = focused ? size + 8 : size + 2;
            colour = focused ? '#5766c7' : '#000';
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline';
            size = focused ? size + 8 : size + 2;
            colour = focused ? '#5766c7' : '#000';
          } else if (route.name === 'Ticky') {
            iconName = focused ? 'ios-browsers-sharp' : 'ios-browsers-outline';
            size = focused ? size + 8 : size + 2;
            colour = focused ? '#5766c7' : '#000';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            size = focused ? size + 8 : size + 2;
            colour = focused ? '#5766c7' : '#000';
          }
          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Ticky" component={Ticky} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

export default TabsProfil;

const styles = StyleSheet.create({});
