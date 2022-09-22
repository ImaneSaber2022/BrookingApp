import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ChosseInteresset from '../components/home/ChosseInteresset';

const ChooseIntrest = ({navigation}) => {
  const items = [
    {id: 1, name: 'Birthay party'},
    {id: 2, name: 'Sports& fitness '},
    {id: 3, name: 'Music'},
    {id: 4, name: 'Film& Entertainment '},
    {id: 5, name: 'Charity& Causes '},
    {id: 6, name: 'Technology'},
    {id: 7, name: 'Concert'},
    {id: 8, name: 'Personal developpement'},
    {id: 8, name: 'Seminar'},
    {id: 8, name: 'Food & Drink '},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <View>
          <Text>Skip for now</Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text style={styles.text}>Choose Interest</Text>
        <Text style={[styles.textHeader, {marginTop: 10}]}>
          Pick your favorites interest to find groups and
        </Text>
        <Text style={styles.textHeader}>event related to them</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.action}>
          <EvilIcons name="search" size={20} color={'gray'} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'gray'}
            style={styles.TextInput}
          />
        </View>
      </View>
      <View style={styles.body}>
        {items.map((item, index) => (
          <ChosseInteresset item={item} index={index} key={index} />
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('FamouzeOrganizer')}
        style={styles.button}>
        <View style={styles.borderbutton}>
          <View style={styles.buttonstyle}>
            <Text style={styles.textbutton}>Finish</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseIntrest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {justifyContent: 'center', alignItems: 'center', marginTop: 20},
  body: {padding: 20, flexDirection: 'row', flexWrap: 'wrap'},
  text: {fontWeight: 'bold', fontSize: 25},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textbutton: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  buttonstyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
  textHeader: {
    fontSize: 14,
    color: 'gray',
  },
  borderbutton: {
    width: '85%',
    height: 50,
    backgroundColor: '#5766c7',
    borderRadius: 15,
  },
  TextInput: {
    width: '80%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#f7f7f7',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderButtonBefor: {
    width: 136,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  borderButtonAfter: {
    width: 136,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#5766c7',
    borderWidth: 1,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  styletEXT: {
    color: '#5766c7',
  },
  styletEXTafter: {
    color: '#000',
  },
});
