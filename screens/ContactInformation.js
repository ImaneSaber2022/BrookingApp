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
const ContactInformation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 10, marginLeft: 60}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Contact Information
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          height: 300,
          borderRadius: 10,
          padding: 15,
          backgroundColor: 'white',
          elevation: 5,
        }}>
        {/* input1 */}
        <View>
          <Text style={{color: 'gray'}}>Full Name</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: '#eceeff',
            borderColor: '#eceeff',
            marginTop: 10,
          }}>
          <View>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={'#000'}
              style={{fontWeight: '600', marginLeft: 10}}
            />
          </View>
        </View>
        {/* end input1 */}
        {/* input2 */}
        <View style={{marginTop: 15}}>
          <Text style={{color: 'gray'}}>Email Adress</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: '#eceeff',
            borderColor: '#eceeff',
            marginTop: 12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="mail"
              size={20}
              color={'gray'}
              style={{marginTop: 11, marginLeft: 10}}
            />
            <TextInput
              placeholder="UXCenters10@gmail.com"
              placeholderTextColor={'#000'}
              style={{fontWeight: '600', marginLeft: 10}}
            />
          </View>
        </View>
        {/* end input2 */}
        {/* input3 */}
        <View style={{marginTop: 15}}>
          <Text style={{color: 'gray'}}>Mobile Phone</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: '#eceeff',
            borderColor: '#eceeff',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Feather
              name="phone"
              size={20}
              color={'gray'}
              style={{marginTop: 11, marginLeft: 10}}
            />
            <TextInput
              placeholder="+1 254683252"
              placeholderTextColor={'#000'}
              style={{fontWeight: '600', marginLeft: 10}}
            />
          </View>
        </View>
        {/* end input3 */}
      </View>
      <View
        style={{
          backgroundColor: '#eceeff',
          width: '100%',
          height: 60,
          borderWidth: 1,
          borderColor: '#eceeff',
          borderRadius: 15,
          marginTop: 20,
          padding: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <View>
            <AntDesign name="checkcircle" color={'#5766c7'} size={18} />
          </View>
          <View style={{marginLeft: 5}}>
            <Text style={{fontSize: 13, fontWeight: '600'}}>
              Keep me updated on the latest news events,
            </Text>
            <Text style={{fontSize: 13, fontWeight: '600'}}>
              end the exclusive offers on this event organizer.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          backgroundColor: 'white',
          height: 150,
          padding: 15,
        }}>
        <Text style={{color: 'gray', fontSize: 14}}>
          By cliking "Register"I accept THE
          <Text style={{color: '#000', fontWeight: '600'}}>
            Terms of Service
          </Text>
          and have read
          <Text style={{color: '#000', fontWeight: '600'}}>Private Police</Text>
          . i agree that Evenline may
          <Text style={{color: '#000', fontWeight: '600'}}>
            share my information
          </Text>
          with the event organizer
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          height: 80,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#f7f7f7',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>$75.11</Text>
            <Text
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              You're goingl +1
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('ChooseTheTicky')}
            style={{
              width: 120,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#5766c7',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
