import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Iconic from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImageBox from '../../components/home/ImageBox';
import {Divider} from 'react-native-elements';
import ImagesContent from '../../components/home/ImagesContent';
const HomeScreen = ({navigation}) => {
  const data = [
    {
      name: 'Concerts',
    },
    {
      name: 'Seminar',
    },
    {
      name: 'Technology',
    },
    {
      name: 'Sports',
    },
    {
      name: 'Fitness',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heaerText}>
          <Text style={{color: 'gray', fontSize: 12}}>Find events near</Text>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>California,USA</Text>
        </View>
        <View style={styles.iconStyle}>
          <TouchableOpacity
            onPress={() => navigation.push('Notification')}
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={styles.unreadBadge}></View>
            <Iconic name="ios-notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Divider width={1} orientation="horizontal" color="#eceeff" />
      </View>
      <ScrollView>
        <View style={styles.styleBody}>
          <View style={styles.action}>
            <EvilIcons name="search" size={20} color={'gray'} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor={'gray'}
              style={styles.TextInput}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{padding:10,flexDirection:'row'}}>
            <TouchableOpacity
              style={styles.buttontext}
              onPress={() => navigation.push('ChooseIntrest')}>
              <View style={styles.styleButton}>
                <Text style={styles.styleText}>My Feed</Text>
              </View>
            </TouchableOpacity>
            {data.map((dt, index) => (
              <TouchableOpacity key={index} style={styles.buttontexte}>
                <View style={styles.styleButton}>
                  <Text style={styles.styleTexte}>{dt.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.body}>
          <View style={{left: 15}}>
            <Text style={styles.bodytext}>Upcoming events</Text>
          </View>
          <View style={{right: 15}}>
            <Text style={[styles.bodytext, {color: 'gray'}]}>See All</Text>
          </View>
        </View>
        <ImageBox />
        <View style={{backgroundColor: '#f7f7f7'}}>
          <View style={{marginTop: 20, left: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Suggestion for you
            </Text>
          </View>
          <ImagesContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  bodytext: {fontSize: 15, fontWeight: '600'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heaerText: {
    left: 10,
  },
  footerBadge: {
    width: 60,
    height: 30,
    backgroundColor: '#eceeff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  iconStyle: {
    right: 10,
    borderColor: '#000',
    width: '14%',
    height: '110%',
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    top: 10,
    width: 10,
    height: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  badge: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: '77%',
    top: 10,
    width: 45,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 100,
  },
  badge2: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '58%',
    left: 15,
    width: '87%',
    height: 100,
    borderRadius: 12,
    zIndex: 90,
  },
  TextInput: {
    width: '85%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBody: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttontext: {
    backgroundColor: '#5766c7',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  buttontexte: {
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'space-between',
    marginRight: 5,
    marginLeft:5,
    padding: 10,
  },
  styleText: {
    color: '#fff',
  },
  styleTexte: {
    color: '#000',
  },
  styleButton: {
    justifyContent: 'center',
   flex:1,
    alignItems: 'center',
  },
  textbadge: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
