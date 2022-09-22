import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import image1 from '../assestes/images/image1.png';
const Page1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.textHeader}>SKIP</Text>
      </TouchableOpacity>
      <View style={styles.headerfooter}>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Image source={image1} style={styles.imgs} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.borderText}>
            <Text style={styles.textBody}>BEST BOOKING APP</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.textFooter}>
              Explore the Best Booking App to Meet
            </Text>
            <Text style={[styles.textFooter, {left: 15}]}>
              the ExtraOrdinary Performance!!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Page2')}
            style={styles.btnNext}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  borderText: {marginTop: 30},
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerfooter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  bodyHeader: {
    width: '80%',
    height: 310,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  textHeader: {
    color: 'gray',
    right: 15,
    marginTop: 15,
  },
  imageBorder: {
    width: '100%',
    height: '55%',
    borderRadius: 20,
  },
  textBody: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  textFooter: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 1,
  },
  btnNext: {
    alignItems: 'center',
    marginTop: 30,
    width: ' 90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#5766c7',
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  header: {alignItems: 'flex-end'},
});
