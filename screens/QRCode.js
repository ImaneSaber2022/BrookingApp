import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Divider} from 'react-native-elements';
import Image1 from '../assestes/images/image1.png';
const QRCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerbody}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 10}}>
          <Text style={styles.title}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.text}>
            <Entypo name="dots-three-vertical" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.bodyHeader}>
          <View>
            <Image source={Image1} style={styles.img} />
          </View>
          <View style={{padding: 5}}>
            <Text style={styles.textheader}>Startup Business Events for</Text>
            <Text style={styles.textheader}>Business starters 2022</Text>
            <View style={styles.footerImg}>
              <View style={styles.row}>
                <EvilIcons name="calendar" size={23} color="gray" />
                <Text style={styles.textStyle}>Sept29,2022</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="time-outline" size={18} color="gray" />
                <Text style={styles.textStyle}>09:00PM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Divider width={1} orientation="horizontal" color="#efefef" />
        </View>
        <View style={styles.text}>
          <AntDesign name="qrcode" size={240} />
        </View>
      </View>
      <View
        style={{
          padding: 14,
        }}>
        <View style={styles.footer}>
          <View style={{marginTop: 5}}>
            <FontAwesome5 name="lightbulb" size={25} color="#FAFA09" />
          </View>
          <View style={{marginLeft: 5}}>
            <Text>Please show this code at the event and</Text>
            <Text>scan it to procced</Text>
          </View>
        </View>
      </View>
      <View style={styles.footertext}>
        <TouchableOpacity
          onPress={() => navigation.push('TabsProfil')}
          style={styles.bodyfooter}>
          <Feather name="download" size={23} color="white" />
          <View style={{marginTop: 5}}>
            <Text style={styles.footertitle}>Download Image</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.foterbutton}>
          <EvilIcons
            name="share-google"
            size={25}
            style={{marginTop: 5}}
            color="#5766c7"
          />
          <View style={{marginTop: 5}}>
            <Text style={styles.button}>share QR Code</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  header: {
    backgroundColor: 'white',
    height: 400,
    borderRadius: 20,
    marginTop: 50,
  },
  button: {fontWeight: 'bold', color: '#5766c7', marginLeft: 4},
  footertext: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    padding: 10,
  },
  foterbutton: {
    width: '47%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
  },
  footertitle: {fontWeight: 'bold', color: 'white'},
  bodyfooter: {
    width: '47%',
    height: 50,
    backgroundColor: '#5766c7',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
  },
  text: {justifyContent: 'center', alignItems: 'center', flex: 1},
  title: {fontSize: 17, fontWeight: 'bold'},
  headerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textheader: {fontWeight: 'bold'},
  bodyHeader: {
    flexDirection: 'row',
    padding: 20,
  },
  row: {flexDirection: 'row'},
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  footerImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textStyle: {
    color: 'gray',
    fontSize: 13,
  },
});
