import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import imgeGoogle from '../assestes/images/imgeGoogle.png';
const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.IconsHeader}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} />
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.headerStyle}>
          <Text style={styles.textHeader}>Sign In</Text>
          <Text style={styles.textHeaderFooter}>Welcome back</Text>
        </View>
        <View style={styles.styleBody}>
          <View style={styles.action}>
            <AntDesign name="mail" size={20} color={'#5766c7'} />
            <TextInput
              placeholder="Uxcenters10@gmail.com"
              placeholderTextColor={'#5766c7'}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.action}>
            <AntDesign name="lock1" size={20} color={'#5766c7'} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#5766c7'}
              style={styles.TextInput}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <AntDesign name="eyeo" size={20} color={'#5766c7'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.forgetPassword}
            onPress={() => navigation.push('ForgetPasswordScreen')}>
            <Text style={{fontWeight: 'bold'}}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('TabsProfil')}>
          <Text style={styles.buttonText}>Sign In </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.body} />
          <View style={{marginTop: 15}}>
            <Text>Or</Text>
          </View>
          <View style={styles.body} />
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={styles.buttonWeb}>
            <Image source={imgeGoogle} style={styles.img} />
            <Text>Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonWeb, {marginTop: 10}]}>
            <AntDesign name="apple1" size={25} />
            <Text>Sign In with Applle</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <View>
            <Text style={{color: '#000'}}> Don't have an account?</Text>
          </View>
          <TouchableOpacity
            style={{left: 5}}
            onPress={() => navigation.push('SignUpScreen')}>
            <Text style={{color: '#2596be'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  body: {
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
    width: '30%',
    right: 5,
  },
  img: {width: 20, height: 28},
  IconsHeader: {
    marginTop: 10,
    left: 10,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textHeaderFooter: {
    color: 'gray',
    fontSize: 15,
    marginTop: 10,
    right: 4,
  },
  headerStyle: {
    marginTop: 30,
  },
  TextInput: {
    width: '75%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    borderColor: '#5766c7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBody: {
    marginTop: 40,
  },
  forgetPassword: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  button: {
    width: '90%',
    borderColor: '#5766c7',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#5766c7',
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonWeb: {
    width: '68%',
    borderColor: '#00000029',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
