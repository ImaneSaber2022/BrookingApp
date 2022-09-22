import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image1 from '../assestes/images/image1.png';
import {Divider} from 'react-native-elements';
import Image10 from '../assestes/images/image10.jpg';

const DetailOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 10, marginLeft: 100}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Detail Order</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 120,
          borderRadius: 10,
          padding: 8,
          elevation: 10,marginTop:20,
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={Image1}
              style={{width: 80, height: 100, borderRadius: 5}}
            />
          </View>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Startup Business Events for
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Business starters 2022
            </Text>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <AntDesign name="calendar" size={18} color="gray" />
              <Text style={{marginLeft: 5, color: 'gray', fontSize: 13}}>
                March 29,2022
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Ionicons name="time-outline" size={18} color="gray" />
              <Text style={{marginLeft: 5, fontSize: 13}}>10.00PM 12.00PM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Order Summary</Text>
      </View>
      <View
        style={{
          marginTop: 15,
          height: 360,
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 200,
            borderRadius: 10,
            elevation: 10,
            borderWidth: 1,
            borderColor: '#f7f7f7',
            padding: 10,
          }}>
          {/* row1 */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 12, color: 'gray', fontWeight: 'bold'}}>
                1x Premium price
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                $35.00
              </Text>
            </View>
          </View>
          {/* end row1 */}
          {/* row2 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View>
              <Text style={{fontSize: 12, color: 'gray', fontWeight: 'bold'}}>
                SubTotal
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: '600'}}>$35.00</Text>
            </View>
          </View>

          {/* end row2 */}
          {/* row3 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, color: 'gray', fontWeight: 'bold'}}>
                Fees
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={16}
                style={{marginLeft: 5}}
                color="gray"
              />
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: '500'}}>$02.11</Text>
            </View>
          </View>

          {/* end row3 */}
          {/* driver */}
          <View style={{marginTop: 20, width: '100%'}}>
            <Divider width={1} orientation="horizontal" color="#eceeff" />
          </View>
          {/* end driver */}

          {/* row4 */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View>
              <Text style={{fontSize: 12, color: 'gray', fontWeight: 'bold'}}>
                Total
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600'}}>$77.11</Text>
            </View>
          </View>
          {/* end row4 */}
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
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.goBack()}>
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
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          height: 80,
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
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>$37.11</Text>
            <Text
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              You're goingl +1
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('ContactInformation')}
            style={{
              width: 120,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#5766c7',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Place Order
              </Text>
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
  header:{
    flexDirection: 'row',
    padding: 5,
  },
});
