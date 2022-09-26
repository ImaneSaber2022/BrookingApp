import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import profilimage from '../../assestes/images/profilimage.jpg';
import TabsFooter from '../tabsFooter/TabsFooter';

const Profil = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.body}>
              <TouchableOpacity>
                <AntDesign name="edit" size={23} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push('Language')}>
                <AntDesign name="setting" size={23} style={{marginLeft: 10}} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyheader}>
          <View style={styles.bodyheadertext}>
            <View style={styles.bodyimage}>
              <Image source={profilimage} style={styles.img} />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.titletext}>Ross Merry</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.titleemail}>RossMerry@gmail.com</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerbody}>
            <View>
              <Text style={styles.footertext}>150</Text>
              <Text style={styles.textColor}>Likes</Text>
            </View>
            <View>
              <Text style={styles.styleText}>50</Text>
              <Text style={styles.textColor}>My ticket</Text>
            </View>
            <View>
              <Text style={styles.styleText}>250</Text>
              <Text style={styles.textColor}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footermap}>
        <TabsFooter />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  titleemail: {color: 'gray', fontSize: 12},
  titletext: {fontSize: 15, fontWeight: 'bold'},
  title: {marginTop: 10},
  text: {fontSize: 17, fontWeight: 'bold'},
  bodyheader: {marginTop: 10, alignItems: 'center'},
  bodyheadertext: {
    backgroundColor: 'white',
    width: 85,
    height: 85,
    borderRadius: 85,
  },
  footer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#D6DBDF',
    height: 60,
    borderRadius: 10,
  },
  footerbody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  footermap: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    padding: 15,
  },
  footertext: {fontWeight: 'bold', fontSize: 15},
  bodyimage: {justifyContent: 'center', alignItems: 'center', flex: 1},
  img: {width: '90%', height: '90%', borderRadius: 50},
  styleText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },
  textColor: {
    color: 'gray',
    fontSize: 13,
  },
});
