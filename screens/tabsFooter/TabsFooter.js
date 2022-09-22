import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Events from './Events';
import Collections from './Collections';
import About from './About';
const Tab = createMaterialTopTabNavigator();

const TabsFooter = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
      }}>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Collection" component={Collections} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default TabsFooter;

const styles = StyleSheet.create({});
