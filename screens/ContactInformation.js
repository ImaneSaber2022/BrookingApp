import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ContactContent from '../components/home/ContactContent';
const ContactInformation = ({navigation}) => {
  const Items = [
    {
      name: 'Full Name',
      text: (
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={'#000'}
          style={{fontWeight: '600', marginLeft: 10}}
        />
      ),
      icon: (
        <AntDesign
          name="mail"
          size={20}
          color={'gray'}
          style={{marginTop: 11, marginLeft: 10}}
        />
      ),
    },
    {
      name: 'Email Adress',
      text: (
        <TextInput
          placeholder="Email Adress"
          placeholderTextColor={'#000'}
          style={{fontWeight: '600', marginLeft: 10}}
        />
      ),
      icon: (
        <AntDesign
          name="mail"
          size={20}
          color={'gray'}
          style={{marginTop: 11, marginLeft: 10}}
        />
      ),
    },
    {
      name: 'Phone',
      text: (
        <TextInput
          placeholder="+1 254683252"
          placeholderTextColor={'#000'}
          style={{fontWeight: '600', marginLeft: 10}}
        />
      ),
      icon: (
        <Feather
          name="phone"
          size={20}
          color={'gray'}
          style={{marginTop: 11, marginLeft: 10}}
        />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headertext}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Contact Information
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {Items.map((item, index) => (
            <ContactContent item={item} index={index} key={index} />
          ))}
        </View>
        <View style={styles.contentbody}>
          <View style={styles.row}>
            <View>
              <AntDesign name="checkcircle" color={'#5766c7'} size={18} />
            </View>
            <View style={{marginLeft: 5}}>
              <Text style={styles.text}>
                Keep me updated on the latest news events,
              </Text>
              <Text style={styles.text}>
                end the exclusive offers on this event organizer.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{padding: 15}}>
          <Text style={{color: 'gray', fontSize: 14}}>
            By cliking "Register"I accept THE
            <Text style={styles.footertext}>Terms of Service</Text>
            and have read
            <Text style={styles.footertext}>Private Police</Text>. i agree that
            Evenline may
            <Text style={styles.footertext}>share my information</Text>
            with the event organizer
          </Text>
        </View>
      </View>
      <View style={{padding: 8}}>
        <View style={styles.footercontent}>
          <View style={styles.footercontentbody}>
            <View>
              <Text style={styles.fotertextcontent}>$75.11</Text>
              <Text style={styles.fottertwocontent}>You're goingl +1</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.push('ChooseTheTicky')}
              style={styles.button}>
              <View style={styles.buttonbody}>
                <Text style={styles.buttontext}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footercontent: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7f7f7',
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#5766c7',
  },
  buttonbody: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttontext: {color: '#fff', fontWeight: 'bold'},
  body: {
    marginTop: 15,
    height: 300,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    elevation: 5,
  },
  fottertwocontent: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
  },
  headertext: {alignItems: 'center', flex: 1},
  footertext: {color: '#000', fontWeight: '600'},
  headercontainer: {
    flexDirection: 'row',
    padding: 5,
  },
  row: {flexDirection: 'row', alignItems: 'center', padding: 10},
  footer: {
    marginLeft: 10,
    backgroundColor: 'white',
    height: 125,
  },
  fotertextcontent: {fontSize: 15, fontWeight: 'bold'},
  text: {fontSize: 13, fontWeight: '600'},
  contentbody: {
    backgroundColor: '#eceeff',
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#eceeff',
    borderRadius: 15,
  },
  header: {padding: 15},
  footercontentbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
