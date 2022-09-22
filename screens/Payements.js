import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PayementSelect from '../components/home/payementSelect';
const Payements = ({navigation}) => {
  const data = [
    {
      id: 0,
      btnRadioff: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-off'}
          size={18}
          color="#5766c7"
        />
      ),
      btnRadioon: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-on'}
          size={18}
          color="#5766c7"
        />
      ),
      name: ' credit Cards',
      text: 'Visa',
      imgUrl: require('../assestes/images/image9.jpg'),
    },
    {
      id: 1,
      btnRadioff: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-off'}
          size={18}
          color="#5766c7"
        />
      ),
      btnRadioon: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-on'}
          size={18}
          color="#5766c7"
        />
      ),
      name: ' credit Cards',
      text: 'pay',
      imgUrl: require('../assestes/images/logoApple.jpg'),
    },
    {
      id: 2,
      btnRadioff: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-off'}
          size={18}
          color="#5766c7"
        />
      ),
      btnRadioon: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-on'}
          size={18}
          color="#5766c7"
        />
      ),
      name: ' credit Cards',
      imgUrl: require('../assestes/images/image10.jpg'),
    },
    {
      id: 3,
      btnRadioff: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-off'}
          size={18}
          color="#5766c7"
        />
      ),
      btnRadioon: (
        <Ionicons
          style={{marginTop: 19}}
          name={'radio-button-on'}
          size={18}
          color="#5766c7"
        />
      ),
      name: ' credit Cards',
      imgUrl: require('../assestes/images/pyonerlogo.png'),
    },
  ];
  const [show, setShow] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 10}}>
          <Text style={styles.text}>Select Payement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <View style={styles.icon}>
            <Ionicons name="md-help-outline" size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.bodytext}>
        <View style={styles.bodyfooter}>
          <Text style={styles.styletext}>one Click payement</Text>
          <AntDesign
            name="arrowright"
            size={25}
            color={'#5766c7'}
            style={{padding: 16}}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.Or}>
        <View style={styles.bodyOr} />
        <View style={{marginTop: 15}}>
          <Text>Or</Text>
        </View>
        <View style={styles.textOr} />
      </View>
      <View style={{marginTop: 10}}>
        {data.map((v, index) => (
          <PayementSelect
            v={v}
            index={index}
            key={index}
            show={show == v.id}
            onClick={() => setShow(v.id)}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.borderbutton}
        onPress={() => navigation.push('DetailOrder')}>
        <View style={styles.bottonbody}>
          <Text style={styles.buttontext}>Confirme</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Payements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {flexDirection: 'row', justifyContent: 'space-between', padding: 10},
  text: {fontSize: 17, fontWeight: 'bold'},
  body: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'gray',
  },
  icon: {justifyContent: 'center', alignItems: 'center', flex: 1},
  bodytext: {
    marginTop: 25,
    borderRadius: 10,
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#5766c7',
    borderBottomWidth: 2,
  },
  bodyfooter: {flexDirection: 'row', justifyContent: 'space-between'},
  styletext: {padding: 17, color: '#5766c7', fontWeight: '700'},
  Or: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  bodyOr: {
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
    width: '40%',
  },
  textOr: {
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
    width: '40%',
  },
  borderbutton: {
    backgroundColor: '#5766c7',
    borderRadius: 12,
    height: 50,
    marginTop: 100,
  },
  bottonbody: {justifyContent: 'center', alignItems: 'center', flex: 1},
  buttontext: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
