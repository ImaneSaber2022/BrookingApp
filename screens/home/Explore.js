import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Data} from '../../data/Data';
const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerbody}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={styles.text}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.body}>
              <MaterialCommunityIcons name="tune-variant" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons
              name="search"
              size={20}
              color={'gray'}
              style={{marginTop: 16}}
            />
            <TextInput
              placeholder="Search All events..."
              placeholderTextColor={'gray'}
              style={styles.TextInput}
            />
          </View>
          <TouchableOpacity style={styles.bodytext}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{padding: 5}}>
                <View style={styles.bodyheader}>
                  <View style={styles.bodyheadertext}>
                    <Ionicons name="location" size={20} color={'white'} />
                  </View>
                </View>
              </View>
              <View style={{marginTop: 8, marginRight: 5}}>
                <Text style={{fontWeight: '400'}}>California</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 12}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Browse By Category
        </Text>
      </View>
      <ScrollView>
        <View style={{padding: 15}}>
          {Data.map((post, index) => (
            <View key={index}>
              <View style={styles.footermap}>
                <View style={{width: '35%'}}>
                  <View style={styles.badge}>
                    <Text style={{fontWeight: 'bold'}}>{post.numberone}</Text>
                    <Text style={{color: 'gray', fontSize: 12}}>
                      {post.numbertwo}
                    </Text>
                  </View>
                  <Image source={post.imgUrl} style={styles.img} />
                </View>
                <View style={styles.bodystyletext}>
                  <Text style={styles.textstyle}>{post.titleone}</Text>
                  <Text style={styles.textstyle}>{post.titletwo}</Text>
                  <View style={styles.footer}>
                    <View style={{marginTop: 5}}>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons name="location" size={20} color={'gray'} />
                        <Text>{post.textone}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.footerBadge}>
                      <Text style={{color: '#5766c7', fontWeight: 'bold'}}>
                        {post.texttwo}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {padding: 20, backgroundColor: 'white'},
  headerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textstyle: {fontWeight: 'bold'},
  bodyheadertext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  bodystyletext: {marginLeft: 10, width: '65%'},
  bodytext: {
    backgroundColor: 'white',
    width: 105,
    height: 35,
    borderRadius: 15,
    marginRight: 35,
  },
  img: {width: '90%', height: 100, borderRadius: 10},
  footermap: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  bodyheader: {
    backgroundColor: '#5766c7',
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  body: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 17, fontWeight: 'bold'},
  TextInput: {
    width: '85%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  footerBadge: {
    width: 60,
    height: 30,
    backgroundColor: '#eceeff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 5,
  },
  badge: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 5,
    top: 10,
    width: 45,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 100,
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
