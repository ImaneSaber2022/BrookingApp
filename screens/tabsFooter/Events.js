import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DataProfil} from '../../data/Data';
import {ScrollView} from 'react-native';
const Events = () => {
  return (
    <ScrollView>
      {DataProfil.map((post, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.header}>
            <View style={{width: '35%'}}>
              <View style={styles.badge}>
                <Text style={styles.headertext}>{post.numberone}</Text>
                <Text style={styles.text}>{post.numbertwo}</Text>
              </View>
              <Image source={post.imgUrl} style={styles.img} />
            </View>
            <View style={styles.body}>
              <Text style={styles.bodytext}>{post.titleone}</Text>
              <Text style={styles.bodytext}>{post.titletwo}</Text>
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
    </ScrollView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {padding: 10},
  header: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  bodytext: {fontWeight: 'bold'},
  body: {marginLeft: 10, width: '65%'},
  img: {width: '90%', height: 100, borderRadius: 10},
  text: {color: 'gray', fontSize: 12},
  headertext: {fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
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
});
