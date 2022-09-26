import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Posts} from '../../data/Data';
const Collections = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Posts.map((post, index) => (
            <View key={index} style={styles.imageView}>
              <Image source={post.imgUrl} style={styles.img} />
              <View style={{margin: 10}}>
                <Text style={styles.text}>{post.titleone}</Text>
                <Text style={styles.body}>{post.titletwo}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="location" size={20} color={'gray'} />
                <Text style={styles.textbody}>{post.textone}</Text>
              </View>
              <TouchableOpacity style={styles.footer}>
                <View style={styles.footertext}>
                  <Text style={{color: '#5766c7'}}>{post.texttwo}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  header: {height: 300,padding:5},
  img: {width: '100%', height: '46%', borderRadius: 12},
  text: {fontSize: 15, fontWeight: 'bold'},
  body: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'gray',
    marginTop: 5,
  },
  footertext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5766c7',
  },
  textbody: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  imageView: {
    backgroundColor: '#fff',
    width: 230,
    height: '95%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eceeff',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
});
