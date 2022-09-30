import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FamozContent from '../components/home/FamozContent';
const FamouzeOrganizer = ({navigation}) => {
  const Posts = [
    {
      imgUrl: require('../assestes/images/image1.png'),

      titleone: 'Relax Tapy Tour',
      titletwo: 'By Angeria',
      textone: 'california, USA',
      texttwo: 'Follow',
      textthree: 'Following',
    },
    {
      imgUrl: require('../assestes/images/image2.png'),

      titleone: 'Dance part Tour',
      titletwo: 'By Angeria',
      textone: 'New york',
      texttwo: 'Follow',
      textthree: 'Following',
    },
    {
      imgUrl: require('../assestes/images/image4.jpg'),
      titleone: 'Relax Tapy Tour',
      titletwo: 'By Angeria',
      textone: 'New york',
      texttwo: 'Follow',
      textthree: 'Following',
    },
    {
      imgUrl: require('../assestes/images/image5.jpg'),
      titleone: 'Relax Tapy Tour',
      titletwo: 'By Angeria',
      textone: 'New york',
      texttwo: 'Follow',
      textthree: 'Following',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <View>
          <Text>Skip for now</Text>
        </View>
      </View>
      <View style={{padding: 12}}>
        <View>
          <Text style={styles.text}>Famouze Organizer</Text>
          <Text style={[styles.textHeader, {marginTop: 5}]}>
            Follow a collection your favorites interest to find
          </Text>
          <Text style={styles.textHeader}>event related to them</Text>
        </View>
        <View style={styles.textinputstyle}>
          <View style={styles.action}>
            <EvilIcons name="search" size={20} color={'gray'} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor={'gray'}
              style={styles.TextInput}
            />
          </View>
        </View>
        <View>
          <Text style={styles.row}>Recomandations</Text>
        </View>
        <View style={styles.bodytext}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Posts.map((post, index) => (
              <FamozContent post={post} index={index} key={index} />
            ))}
          </ScrollView>
        </View>
        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.push('NewyArtFestival')}
            style={styles.footer}>
            <View style={styles.bottontext}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*end button */}
    </View>
  );
};

export default FamouzeOrganizer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodystyle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'gray',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textinputstyle: {alignItems: 'center', marginTop: 5},
  textHeader: {
    fontSize: 14,
    color: 'gray',
  },
  text: {fontWeight: 'bold', fontSize: 25},
  TextInput: {
    width: '91%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5766c7',
  },
  button: {alignItems: 'center'},
  footer: {
    backgroundColor: '#5766c7',
    width: '100%',
    height: 50,
    borderRadius: 10,
  },
  bodytitle: {fontSize: 15, fontWeight: 'bold'},
  action: {
    flexDirection: 'row',

    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footertext: {
    fontSize: 13,
    fontWeight: 'bold',

    marginTop: 5,
  },
  bottontext: {justifyContent: 'center', alignItems: 'center', flex: 1},
  img: {width: '100%', height: '55%', borderRadius: 12},
  bodytext: {height: '60%', marginTop: 10},
  row: {fontSize: 18, fontWeight: 'bold', marginTop: 15},
  imageView: {
    backgroundColor: '#fff',
    width: 250,
    height: '95%',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  bodyfooter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
