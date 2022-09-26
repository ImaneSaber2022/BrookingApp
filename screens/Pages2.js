import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import image2 from '../assestes/images/image2.png';
const Page2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerheader}>
        <Text style={styles.textHeader}>SKIP</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <View style={styles.header}>
          <View style={styles.headerbody}>
            <Image source={image2} style={styles.imgs} />
          </View>
        </View>
        <View style={styles.body}>
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
            onPress={() => navigation.push('SignInScreen')}
            style={styles.btnNext}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerheader: {alignItems: 'flex-end'},
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  borderText: {marginTop: 30},
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  icon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerbody: {
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
});
