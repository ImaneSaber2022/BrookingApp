import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BadgeTicket from '../components/home/BadgeTicket';
const ChooseTheTicky = ({navigation}) => {
  const TICKET = [
    {
      NumeroOne: 24,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 25,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 26,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 27,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 28,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 29,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 30,
      MoinsOne: 'Mar',
    },
    {
      NumeroOne: 31,
      MoinsOne: 'Mar',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.title}>
          <Text style={styles.titletext}>Get a Ticket</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {TICKET.map((ticky, index) => (
            <TouchableOpacity key={index} style={styles.headerticket}>
              <View style={styles.bodyticket}>
                <Text>{ticky.NumeroOne}</Text>
                <Text>{ticky.MoinsOne}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <BadgeTicket />
      <View style={styles.footer}>
        <View style={styles.footertext}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>$75.11</Text>
            <Text style={styles.footerbody}>You're goingl +1</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Filters')}
            style={styles.footerstyle}>
            <View style={styles.row}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseTheTicky;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 10,
    padding: 20,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
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
  footerbody: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  footertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  footerstyle: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#5766c7',
  },
  title: {marginRight: 10, marginLeft: 100},
  titletext: {fontSize: 17, fontWeight: 'bold'},
  body: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  bodytext: {fontSize: 15, fontWeight: 'bold'},
});
