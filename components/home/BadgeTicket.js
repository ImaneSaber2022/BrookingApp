import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {Divider} from 'react-native-elements';
  import Image1 from '../../assestes/images/image1.png';

const BadgeTicket = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headercontainer}>
          <Text style={styles.bodytext}>Choose the Ticket</Text>
          {/* 1 */}
          <View
            style={styles.body}>
            <View
              style={styles.bodystyle}>
              <View
                style={styles.row}>
                <View>
                  <Text>Premium Price</Text>
                </View>
                <View>
                  <AntDesign name="checkcircle" color={'white'} size={18} />
                </View>
              </View>
              <View style={{height: 100}}>
                <View style={styles.rowtwo}>
                  <View>
                    <Image
                      source={Image1}
                      style={styles.img}
                    />
                  </View>
                  <View style={{marginLeft: 8}}>
                    <Text style={styles.textstyle}>
                      Startup Business Events for
                    </Text>
                    <Text style={styles.textstyle}>
                      Business starters 2022
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                      }}>
                      <View>
                        <Text style={{color: 'gray', fontSize: 13}}>
                          10 Sept left
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                          $75.00
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Divider width={1} orientation="horizontal" color="#eceeff" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 30,
                  height: 90,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#5766c7"
                    style={{marginTop: 3}}
                  />
                  <Text style={{color: '#5766c7'}}>show benefit</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eceeff',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Text style={{color: 'gray', fontWeight: 'bold'}}>-</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: 'bold'}}>1</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eceeff',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      marginLeft: 5,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Text style={{color: 'gray', fontWeight: 'bold'}}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* end1 */}
          {/* 2 */}
          <View
            style={{
              height: 215,
              marginTop: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#eceeff',
            }}>
            <View
              style={{
                backgroundColor: '#eceeff',
                height: 45,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{padding: 12}}>
                  <Text>Premium Price</Text>
                </View>
                <View style={{padding: 12}}>
                  <AntDesign name="checkcircle" color={'white'} size={18} />
                </View>
              </View>
              <View style={{height: 100}}>
                <View style={{flexDirection: 'row', padding: 10}}>
                  <View>
                    <Image
                      source={Image1}
                      style={{width: 75, height: 75, borderRadius: 10}}
                    />
                  </View>
                  <View style={{marginLeft: 8}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Startup Business Events for
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Business starters 2022
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                      }}>
                      <View>
                        <Text style={{color: 'gray', fontSize: 13}}>
                          10 Sept left
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                          $75.00
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Divider width={1} orientation="horizontal" color="#eceeff" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 30,

                  height: 90,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#5766c7"
                    style={{marginTop: 3}}
                  />
                  <Text style={{color: '#5766c7'}}>show benefit</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eceeff',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Text style={{color: 'gray', fontWeight: 'bold'}}>-</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: 'bold'}}>1</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eceeff',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      marginLeft: 5,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Text style={{color: 'gray', fontWeight: 'bold'}}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* end2 */}
         
        </View>
      </View>
  )
}

export default BadgeTicket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    row:{flexDirection: 'row', justifyContent: 'space-between',padding:12},
    bodystyle:{
        backgroundColor: '#00334e',
        height: 45,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
      textstyle:{fontSize: 15, fontWeight: 'bold'},
    body:{
        height: 215,
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#00334e',
      },
      img:{width: 75, height: 75, borderRadius: 10},
      rowtwo:{flexDirection: 'row', padding: 10},
    headercontainer:{padding: 20},
    headerticket: {
      width: 50,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      marginLeft: 5,
    },
    bodyticket: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      padding: 10,
    },
    title: {marginRight: 10, marginLeft: 100},
    titletext: {fontSize: 17, fontWeight: 'bold'},
   
    bodytext: {fontSize: 15, fontWeight: 'bold'},
  });