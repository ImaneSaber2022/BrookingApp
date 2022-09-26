import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Image1 from '../assestes/images/image1.png';
const DowloadTicket = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerbody}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={styles.text}>Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.title}>
              <Entypo name="dots-three-vertical" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.styleImg}>
            <Image source={Image1} style={styles.img} />
          </View>
          <View style={{padding: 20}}>
            <View style={styles.header}>
              <View>
                <Text style={styles.styletext}>
                  Startup Business Events for
                </Text>
                <Text style={styles.styletext}>Business starters 2022</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.headerText}>
                  <View>
                    <Text style={styles.textStyle}>Date</Text>
                  </View>
                  <View>
                    <Text style={styles.textStyle}>Time</Text>
                  </View>
                </View>
                <View style={styles.headerText}>
                  <View>
                    <Text>Sept29,2022</Text>
                  </View>
                  <View>
                    <Text>09:00PM</Text>
                  </View>
                </View>
                <View style={[styles.headerText, {marginTop: 20}]}>
                  <View>
                    <Text style={styles.textStyle}>Venue</Text>
                  </View>
                  <View>
                    <Text style={styles.textStyle}>Seat</Text>
                  </View>
                </View>
                <View style={styles.headerText}>
                  <View>
                    <Text>Building Park</Text>
                  </View>
                  <View>
                    <Text>Np Seat</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.footerbody}>
              <View style={styles.footertext}>
                <FontAwesome name="barcode" size={100} />
                <FontAwesome name="barcode" size={100} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textbody}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#5766c7'}]}>
            <Feather name="download" size={23} color="white" />
            <View style={styles.bodericon}>
              <Text style={[styles.buttontext, {color: 'white'}]}>
                Download Image
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('QRCode')}
            style={styles.button}>
            <Fontisto
              name="qrcode"
              size={18}
              style={{marginTop: 5}}
              color="#5766c7"
            />
            <View style={styles.borderbutton}>
              <Text style={styles.buttontext}>Show QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DowloadTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {flexDirection: 'column', padding: 10},
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  footertext: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  buttontext: {
    fontWeight: 'bold',
    color: '#5766c7',
    marginLeft: 4,
    fontSize: 12,
  },
  borderbutton: {marginLeft: 2, marginTop: 5},
  button: {
    width: '46%',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodericon: {marginLeft: 2, marginTop: 5},
  textbody: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  footerbody: {
    backgroundColor: '#efefef',
    height: 60,
    borderRadius: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  styletext: {fontWeight: 'bold'},
  text: {fontSize: 17, fontWeight: 'bold'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerbody: {padding: 20},
  textStyle: {
    color: 'gray',
    fontWeight: '600',
  },
  textColor: {
    fontWeight: '700',
    fontSize: 15,
  },
  title: {justifyContent: 'center', alignItems: 'center', flex: 1},
  header: {
    backgroundColor: '#efefef',
    height: 205,
    borderRadius: 15,
    padding: 12,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  img: {
    width: '100%',
    height: 192,
    borderRadius: 10,
  },
  styleImg: {
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    padding: 4,
    borderRadius: 10,
    elevation: 5,
  },
  body: {
    backgroundColor: '#f8f8f8',
    height: '80%',
    borderRadius: 20,
    marginTop: 25,
    elevation: 5,
    padding: 15,
  },
});
