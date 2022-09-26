import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TICKET} from '../../data/Data';
import {Calendar} from 'react-native-calendars';
const Ticky = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [modal, setModal]= useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headertext}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon}>
              <Entypo name="dots-three-vertical" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyicon}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.bodyiconborder}>
              <View style={styles.bodytexticon}>
                <Entypo name="chevron-small-left" size={20} color="gray" />
              </View>
            </TouchableOpacity>
            <View style={{marginLeft: 5}}>
              <Text style={{fontWeight: 'bold'}}>September 2022</Text>
            </View>
            <TouchableOpacity style={styles.body}>
              <View style={styles.bodytext}>
                <Entypo name="chevron-small-right" size={20} color="gray" />
              </View>
            </TouchableOpacity>
            
          </View>
          <TouchableOpacity onPress={() => setModal(!modal)}>
            <AntDesign name="calendar" size={20} color={'gray'} />
          </TouchableOpacity>
        </View>
        {modal && <Calendar />}

        <View style={{marginTop: 30}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TICKET.map((ticky, index) => (
              <TouchableOpacity key={index} style={styles.bodymap}>
                <View style={styles.bodymaptext}>
                  <Text>{ticky.NumeroOne}</Text>
                  <Text>{ticky.MoinsOne}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={{padding: 25}}>
        <View style={styles.headerupcoming}>
          {show ? (
            <>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.bodyupcomming}>
                <View style={styles.bodyupcommingtext}>
                  <Text style={{color: 'white'}}>Upcomming</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShow(false)}
                style={styles.bodyupcomingfooter}>
                <View style={styles.bodyupcomingfootertext}>
                  <Text>Past Ticket</Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  backgroundColor: 'white',
                  width: '50%',
                  height: 35,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{color: 'gray'}}>Upcomming</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShow(false)}
                style={{
                  backgroundColor: '#00334e',
                  width: '50%',
                  height: 35,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{color: 'white'}}>Past Ticket</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
        {show ? (
          // 1 upcomming
          <View style={{marginTop: 20}}>
            <View style={styles.footer}>
              <View>
                <Text style={styles.footertext}>
                  UK Startup Business Events Event
                </Text>
                <Text style={styles.footertext}>For Business starters</Text>
              </View>
              <TouchableOpacity style={styles.footerbody}>
                <View style={styles.footerbodyicon}>
                  <Ionicons
                    name="color-palette-outline"
                    size={25}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.time}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.timetext}>Time</Text>
                  </View>
                  <View style={{marginLeft: 55}}>
                    <Text style={styles.timetext}>Seat</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 5}}>
                    <Text style={styles.seat}>10.00 PM</Text>
                  </View>
                  <View style={{marginLeft: 30, marginTop: 5}}>
                    <Text style={styles.seat}>No Seat</Text>
                  </View>
                </View>
              </View>
              <View style={styles.borderbutton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.push('DowloadTicket')}>
                  <Text>Premium ticket x1</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.footer,{marginTop:10}]}>
              <View style={{}}>
                <Text style={styles.footertext}>
                  Classical 70's Classic Music
                </Text>
                <Text style={styles.footertext}>Party 02-04</Text>
              </View>
              <TouchableOpacity style={styles.footerbody}>
                <View style={styles.footerbodyicon}>
                  <Ionicons
                    name="musical-notes-outline"
                    size={25}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.timetext}>Time</Text>
                  </View>
                  <View style={{marginLeft: 55}}>
                    <Text style={styles.timetext}>Seat</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 5}}>
                    <Text style={styles.seat}>01.00 PM</Text>
                  </View>
                  <View style={{marginLeft: 30, marginTop: 5}}>
                    <Text style={styles.seat}>65 H</Text>
                  </View>
                </View>
              </View>
              <View style={styles.borderbutton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.push('DowloadTicket')}>
                  <Text>Premium ticket x1</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          //end upcomming

          // passtTicket
          <View style={{marginTop: 20}}>
            <View style={styles.time}>
              <View>
                <Text style={styles.footertext}>
                  Startup Business Events for
                </Text>
                <Text style={styles.footertext}>Business starters 2022</Text>
              </View>
              <TouchableOpacity style={styles.footerbody}>
                <View style={styles.button}>
                  <Ionicons name="videocam-outline" size={25} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.time}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.timetext}>Time</Text>
                  </View>
                  <View style={{marginLeft: 55}}>
                    <Text style={styles.timetext}>Seat</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 5}}>
                    <Text style={styles.seat}>08.45 AM</Text>
                  </View>
                  <View style={{marginLeft: 30, marginTop: 5}}>
                    <Text style={styles.seat}>No Seat</Text>
                  </View>
                </View>
              </View>
              <View style={styles.foterbotton}>
                <TouchableOpacity style={styles.button}>
                  <Text>Success</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.time,{marginTop:10}]}>
              <View>
                <Text style={styles.footertext}>
                  California Park Coffee Lover for
                </Text>
                <Text style={styles.footertext}>Festival Camp</Text>
              </View>
              <TouchableOpacity style={styles.footerbody}>
                <View style={styles.button}>
                  <Ionicons
                    name="color-palette-outline"
                    size={25}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.timetext}>Time</Text>
                  </View>
                  <View style={{marginLeft: 55}}>
                    <Text style={styles.timetext}>Seat</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 5}}>
                    <Text style={styles.seat}>07.00 PM</Text>
                  </View>
                  <View style={{marginLeft: 30, marginTop: 5}}>
                    <Text style={styles.seat}>No Seat</Text>
                  </View>
                </View>
              </View>
              <View style={styles.foterbotton}>
                <TouchableOpacity style={styles.button}>
                  <Text>Success</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          //end passtTicket
        )}
      </View>
    </View>
  );
};

export default Ticky;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 25,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  foterbotton: {
    width: 80,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2BEA1F',
    marginTop: 4,
  },
  seat: {fontWeight: '500'},
  footerbody: {
    backgroundColor: '#5766c7',
    width: 45,
    height: 45,
    borderRadius: 15,
  },
  borderbutton: {
    width: 125,
    height: 35,
    borderRadius: 12,
    marginTop: 4,
    backgroundColor: '#eceeff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 20,
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  timetext: {color: 'gray'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 20,
    padding: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bodyicon: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  bodytext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodymap: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#eceeff',
    marginLeft: 5,
  },
  bodymaptext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footerbodyicon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footertext: {fontSize: 14, fontWeight: 'bold'},
  icon: {justifyContent: 'center', alignItems: 'center', flex: 1},
  headertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyiconborder: {
    backgroundColor: '#eceeff',
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  headerupcoming: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodytexticon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    backgroundColor: '#eceeff',
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
  bodyupcomming: {
    backgroundColor: '#00334e',
    width: '50%',
    height: 35,
    borderRadius: 10,
  },
  bodyupcommingtext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodyupcomingfooter: {
    backgroundColor: 'white',
    width: '50%',
    height: 35,
    borderRadius: 10,
  },
  bodyupcomingfootertext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
