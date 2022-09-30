import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Data} from '../../data/Data';
import {TouchableOpacity} from 'react-native';
const ImagesContent = ({navigation}) => {
  return (
    <>
      {Data.map((post, index) => (
        <View key={index} style={styles.container}>
          <TouchableOpacity style={styles.header}>
            <View style={{width: '35%'}}>
              <View style={styles.badge}>
                <Text style={{fontWeight: 'bold'}}>{post.numberone}</Text>
                <Text style={{color: 'gray', fontSize: 12}}>
                  {post.numbertwo}
                </Text>
              </View>
              <Image source={post.imgUrl} style={styles.img} />
            </View>
            <View style={styles.styletext}>
              <Text style={styles.title}>{post.titleone}</Text>
              <Text style={styles.title}>{post.titletwo}</Text>
              <View style={styles.footer}>
                <View style={{marginTop: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="location" size={20} color={'gray'} />
                    <Text>{post.textone}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.footerBadge}>
                  <Text style={styles.text}>{post.texttwo}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default ImagesContent;

const styles = StyleSheet.create({
  container: {padding: 15},
  header: {
    width: '100%',
    height: 137,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  text: {color: '#5766c7', fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginTop:20,
    
  },
  styletext: {marginLeft: 10, width: '65%'},
  img: {width: '100%', height: 118, borderRadius: 10},
  badge: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 10,
    top: 10,
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  title: {fontWeight: 'bold'},
  footerBadge: {
    width: 60,
    height: 40,
    backgroundColor: '#eceeff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
