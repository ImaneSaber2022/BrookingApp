import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FamozContent = ({post, index}) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <View key={index} style={styles.imageView}>
        <Image source={post.imgUrl} style={styles.img} />
        <View style={{margin: 10}}>
          <Text style={styles.bodytitle}>{post.titleone}</Text>
          <Text style={styles.bodystyle}>{post.titletwo}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="location" size={20} color={'gray'} />
          <Text style={styles.footertext}>{post.textone}</Text>
        </View>
        {!show ? (
          <TouchableOpacity style={styles.body} onPress={() => setShow(true)}>
            <View style={styles.bodyfooter}>
              <Text style={{color: '#5766c7'}}>{post.texttwo}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={[styles.body, {backgroundColor: '#5766c7'}]}>
            <View style={styles.bodyfooter}>
              <Text style={{color: 'white'}}>{post.textthree}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FamozContent;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5766c7',
  },
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
  footertext: {
    fontSize: 13,
    fontWeight: 'bold',

    marginTop: 5,
  },
  img: {width: '100%', height: '55%', borderRadius: 12},
  bodytitle: {fontSize: 15, fontWeight: 'bold'},
  bodystyle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'gray',
    marginTop: 5,
  },
  bodyfooter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
