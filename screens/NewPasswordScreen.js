import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const NewPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.IconsHeader}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Reset your password</Text>
        <View style={styles.styleBody}>
          <View style={styles.action}>
            <Feather name="user" size={20} color={'#5766c7'} />
            <TextInput
              placeholder="User Name"
              placeholderTextColor={'#5766c7'}
              style={styles.TextInput}
            />
          </View>
          <View style={[styles.action, {marginTop: 10}]}>
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
          <View style={[styles.action, {marginTop: 10}]}>
            <AntDesign name="lock1" size={20} color={'#5766c7'} />
            <TextInput
              placeholder=" Confirm Password"
              placeholderTextColor={'#5766c7'}
              style={styles.TextInput}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <AntDesign name="eyeo" size={20} color={'#5766c7'} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Password enregistrer')}>
          <Text style={styles.buttonText}>Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('SignInScreen')}
          style={{marginTop: 40}}>
          <Text style={styles.footer}>Back to Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {color: '#6BB0F5', fontWeight: 'bold', fontSize: 15},
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  IconsHeader: {
    marginTop: 10,
    left: 10,
  },
  TextInput: {
    width: '80%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',

    borderColor: '#5766c7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBody: {
    marginTop: '15%',
  },
  button: {
    width: '80%',
    borderColor: '#5766c7',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#5766c7',
    marginTop: 25,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});