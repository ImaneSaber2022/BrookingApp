import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image1 from '../assestes/images/image1.png';
import {Divider} from 'react-native-elements';
import Image10 from '../assestes/images/image10.jpg';

const DetailOrder = ({navigation}) => {
  const Item = [
    {
      name: '1x Premium price',
      numbr: '$35.00',
    },
    {
      name: ' SubTotal',
      numbr: '$35.00',
    },
    {
      name: ' Fees',
      numbr: '$02.11',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headercontainer}>
          <Text style={styles.textstyle}>Detail Order</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <View>
            <Image source={Image1} style={styles.img} />
          </View>
          <View style={{padding: 5}}>
            <Text style={styles.title}>Startup Business Events for</Text>
            <Text style={styles.title}>Business starters 2022</Text>

            <View style={styles.rowone}>
              <AntDesign name="calendar" size={18} color="gray" />
              <Text style={styles.texticon}>March 29,2022</Text>
            </View>
            <View style={styles.rowtwo}>
              <Ionicons name="time-outline" size={18} color="gray" />
              <Text style={styles.textrowtwo}>10.00PM 12.00PM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.styletextorder}>Order Summary</Text>
      </View>
      <View style={styles.bodytwo}>
        <View style={styles.bodytwotext}>
          {Item.map((dt, index) => (
            <View style={styles.rowthree} key={index}>
              <View>
                <Text style={styles.textpremium}>{dt.name}</Text>
              </View>
              <View>
                <Text style={styles.textstyletwo}>{dt.numbr}</Text>
              </View>
            </View>
          ))}
          {/* driver */}
          <View style={styles.styleDiver}>
            <Divider width={1} orientation="horizontal" color="#eceeff" />
          </View>
          {/* end driver */}
          <View style={styles.bodydiver}>
            <View>
              <Text style={styles.styletextdiverone}>Total</Text>
            </View>
            <View>
              <Text style={styles.styledivertwo}>$82.11</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Payement Method
            </Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.goBack()}>
            <View>
              <Text style={{color: '#5766c7', fontWeight: '600'}}>Change</Text>
            </View>
            <View style={{marginLeft: 5, marginTop: 3}}>
              <AntDesign name="right" size={15} color="#5766c7" />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 15,
            height: 70,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#f7f7f7',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Paypal</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                UXCenters10@gmail.com
              </Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 5,
                backgroundColor: '#f7f7f7',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image source={Image10} style={{width: 25, height: 25}} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerbody}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>$37.11</Text>
            <Text style={styles.footerbodytext}>You're goingl +1</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('ContactInformation')}
            style={styles.footertext}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>Place Order</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  styleDiver: {marginTop: 20, width: '100%'},
  title: {fontSize: 15, fontWeight: 'bold'},
  textstyle: {fontSize: 17, fontWeight: 'bold'},
  headercontainer: {alignItems: 'center', flex: 1},
  header: {
    flexDirection: 'row',
    padding: 5,
  },
  buttontext: {color: '#fff', fontWeight: 'bold'},
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footertext: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#5766c7',
  },
  footer: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7f7f7',
    padding: 10,
  },
  textrowtwo: {marginLeft: 5, fontSize: 13},
  body: {
    backgroundColor: '#fff',
    height: 120,
    borderRadius: 10,
    padding: 8,
    elevation: 5,
    marginTop: 10,
  },
  footerbodytext: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 5,
  },
  footerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  styletextdiverone: {fontSize: 16, color: 'gray', fontWeight: 'bold'},
  bodydiver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  rowthree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  styletextorder: {fontWeight: 'bold', fontSize: 16},
  rowone: {flexDirection: 'row', marginTop: 10},
  img: {width: 80, height: 100, borderRadius: 5},
  texticon: {marginLeft: 5, color: 'gray', fontSize: 13},
  rowtwo: {flexDirection: 'row', marginTop: 4},
  bodytwo: {
    marginTop: 20,
    height: 360,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  styledivertwo: {fontSize: 18, fontWeight: '600'},
  textstyletwo: {fontSize: 15, color: '#000', fontWeight: 'bold'},
  textpremium: {fontSize: 12, color: 'gray', fontWeight: 'bold'},
  bodytwotext: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#f7f7f7',
    padding: 10,
  },
});
