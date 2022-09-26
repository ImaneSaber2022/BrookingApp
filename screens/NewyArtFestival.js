import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Image1 from '../assestes/images/image1.png';
import {Divider} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';

const NewyArtFestival = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: 10}}>
            <EvilIcons name="share-apple" size={35} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Divider width={1} orientation="horizontal" color="#eceeff" />
      </View>
      <View style={{padding: 20}}>
        <View>
          <View style={styles.badge}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome
                name="video-camera"
                size={20}
                color="white"
                style={{marginLeft: 5}}
              />
              <Text style={styles.video}>Watch Video</Text>
            </TouchableOpacity>
          </View>
          <Image source={Image1} style={styles.img} />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.textStyle}>NewY Art Festival:2022 Dana</Text>
          <Text style={styles.textStyle}>Point 48-50</Text>
        </View>
        <View style={styles.icons}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.iconsBody}>
              <View style={styles.iconsbodytext}>
                <Text>29</Text>
                <Text style={{color: 'gray'}}>Sep</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginLeft: 20}}>
              <Text style={styles.text}>Friday</Text>
              <Text style={styles.textbody}>09:00 PM-End</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.body} onPress={() => setShow(!show)}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="calendar-clock-outline"
                size={26}
                color={'#5766c7'}
              />
            </View>
          </TouchableOpacity>
        </View>
        {show && <Calendar />}
        <View style={{marginTop: 15}}>
          <Text style={styles.styletext}>Abouts this Events</Text>
          <Text style={styles.paragraph}>
            We're celebrating our 30th edition of the California Art Festival in
            CA this Spring So join us at the Building Park in California State
            University from March 29-30-2022 with our Private view Opening on
            Saturday,March 26!
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.footertext}>Show more</Text>
        </TouchableOpacity>
        <View style={styles.footerbody}>
          <View>
            <Text style={styles.textfooter}>$60.98 - 75.00</Text>
            <Text style={styles.textheader}>200 Spot left</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Payements')}
            style={styles.footer}>
            <View style={styles.row}>
              <Text style={styles.rowtext}>Get Ticket</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewyArtFestival;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footertext: {color: '#5766c7', marginTop: 10, fontWeight: 'bold'},
  textbody: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'gray',
    marginTop: 5,
  },
  textheader: {marginTop: 4, fontSize: 13, color: 'gray'},
  textfooter: {fontSize: 17, fontWeight: 'bold'},
  rowtext: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  footerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  text: {fontSize: 16, fontWeight: 'bold'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  styletext: {fontSize: 17, fontWeight: 'bold'},
  iconsBody: {
    backgroundColor: '#f7f7f7',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  row: {justifyContent: 'center', alignItems: 'center', flex: 1},
  iconsbodytext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  video: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  img: {width: 320, height: 220, borderRadius: 10},
  icon: {flexDirection: 'row', padding: 5},
  badge: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 165,
    marginLeft: 15,
    width: 135,
    height: 38,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 100,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'White',
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5766c7',
  },
  paragraph: {
    maxWidth: '96%',
    color: 'gray',
    marginTop: 5,
    fontWeight: '450',
  },
  footer: {
    backgroundColor: '#5766c7',
    width: 140,
    height: 50,
    borderWidth: 1,
    borderColor: '#5766c7',
    borderRadius: 12,
  },
});
