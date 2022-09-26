import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import Page1 from './screens/Page1';
import Page2 from './screens/Pages2';
import SignUpScreen from './screens/SignUpScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TabsProfil from './screens/home/TabsProfil';
import ImageBox from './components/home/ImageBox';
import ImagesContent from './components/home/ImagesContent';
import ChooseIntrest from './screens/ChooseIntrest';
import Buttonshow from './components/home/Buttonshow';
import FamouzeOrganizer from './screens/FamouzeOrganizer';
import NewyArtFestival from './screens/NewyArtFestival';
import BadgeTicket from './components/home/BadgeTicket';
import Payements from './screens/Payements';
import DetailOrder from './screens/DetailOrder';
import ContactInformation from './screens/ContactInformation';
import ChooseTheTicky from './screens/ChooseTheTicky';
import Filters from './screens/Filters';
import DowloadTicket from './screens/DowloadTicket';
import QRCode from './screens/QRCode';
import TabsFooter from './screens/tabsFooter/TabsFooter';
import Notification from './screens/Notification';
import Language from './screens/Language';
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BadgeTicket" component={BadgeTicket} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="TabsFooter" component={TabsFooter} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="DetailOrder" component={DetailOrder} />
        <Stack.Screen name="ContactInformation" component={ContactInformation}/>
        <Stack.Screen name="Payements" component={Payements} />
        <Stack.Screen name="NewyArtFestival" component={NewyArtFestival} />
        <Stack.Screen name="FamouzeOrganizer" component={FamouzeOrganizer} />
        <Stack.Screen name="ChooseIntrest" component={ChooseIntrest} />
        <Stack.Screen name="Buttonshow" component={Buttonshow} />
        <Stack.Screen name="TabsProfil" component={TabsProfil} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ImageBox" component={ImageBox} />
        <Stack.Screen name="ImagesContent" component={ImagesContent} />
        <Stack.Screen name="ChooseTheTicky" component={ChooseTheTicky} />
        <Stack.Screen name="DowloadTicket" component={DowloadTicket} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="ForgetPasswordScreen"component={ForgetPasswordScreen}/>
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
