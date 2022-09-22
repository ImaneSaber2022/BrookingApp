import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Date2} from '../../data/Data';
import {DATA} from '../../data/Data';

const Favorite = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerbody}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.body}>
            <Text style={styles.bodytext}>Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon}>
        <AntDesign name="calendar" size={20} color={'gray'} />
        <Text style={styles.text}>tue, March 29</Text>
      </View>
      <ScrollView>
        <View style={{padding: 15}}>
          {DATA.map((post, index) => (
            <View key={index}>
              <View style={styles.bodymap}>
                <View style={{width: '35%'}}>
                  <View style={styles.badge}>
                    <Text style={{fontWeight: 'bold'}}>{post.numberone}</Text>
                    <Text style={{color: 'gray', fontSize: 12}}>
                      {post.numbertwo}
                    </Text>
                  </View>
                  <Image source={post.imgUrl} style={styles.img} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.textstyle}>{post.titleone}</Text>
                  <Text style={styles.textstyle}>{post.titletwo}</Text>
                  <View style={styles.titlebody}>
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
          <View style={{padding: 12, flexDirection: 'row'}}>
            <AntDesign name="calendar" size={20} color={'gray'} />
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 4}}>
              Fri, Oct 01
            </Text>
          </View>
          {Date2.map((post, index) => (
            <View key={index}>
              <View style={styles.footer}>
                <View style={{width: '35%'}}>
                  <View style={styles.badge}>
                    <Text style={{fontWeight: 'bold'}}>{post.numberone}</Text>
                    <Text style={{color: 'gray', fontSize: 12}}>
                      {post.numbertwo}
                    </Text>
                  </View>
                  <Image source={post.imgUrl} style={styles.footerimage} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.textstyle}>{post.titleone}</Text>
                  <Text style={styles.textstyle}>{post.titletwo}</Text>
                  <View style={styles.titlebody}>
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

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlebody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  title: {marginLeft: 10, width: '65%'},
  textstyle: {fontWeight: 'bold'},
  text: {fontSize: 15, fontWeight: 'bold', marginLeft: 4},
  header: {padding: 15, backgroundColor: 'white', height: 60},
  TextInput: {
    width: '85%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  icon: {padding: 12, flexDirection: 'row'},
  bodytext: {fontSize: 17, fontWeight: 'bold'},
  headerbody: {
    flexDirection: 'row',
    padding: 5,
  },
  footerimage: {width: '90%', height: 100, borderRadius: 10},
  footer: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  img: {width: '90%', height: 100, borderRadius: 10},
  bodymap: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  body: {marginRight: 10, marginLeft: 100},
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
