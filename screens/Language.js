import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CheckLanguage from './check-language';
const Language = ({navigation}) => {
  const [show, setShow] = useState(null);
  const data = [
    {
      id: 0,
      imgurl: require('../assestes/images/logoUsa.png'),
      name: 'English(USA)',
      ico: <AntDesign name="checkcircleo" size={20} color="lightgreen" />,
    },
    {
      id: 1,
      imgurl: require('../assestes/images/logogbr.png'),
      name: 'English(GBR)',
      ico: <AntDesign name="checkcircleo" size={20} color="lightgreen" />,
    },
    {
      id: 2,
      imgurl: require('../assestes/images/logofranse.jpg'),
      name: 'France(GBR)',
      ico: <AntDesign name="checkcircleo" size={20} color="lightgreen" />,
    },
    {
      id: 3,
      imgurl: require('../assestes/images/logoispain.png'),
      name: 'Spain(ES)',
      ico: <AntDesign name="checkcircleo" size={20} color="lightgreen" />,
    },
    {
      id: 4,
      imgurl: require('../assestes/images/logoitalien.jpg'),
      name: 'Italy(IT)',
      ico: <AntDesign name="checkcircleo" size={20} color="lightgreen" />,
    },
  ];
  return (
    <View style={styles.contanier}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Text style={styles.title}>Select Language</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 15}}>
        <View style={styles.action}>
          <EvilIcons name="search" size={20} color={'gray'} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'gray'}
            style={styles.TextInput}
          />
        </View>
        <View style={styles.text}>
          {data.map((d, index) => (
            <CheckLanguage
              d={d}
              key={index}
              show={show == d.id}
              onClick={() => setShow(d.id)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  contanier: {flex: 1, backgroundColor: 'white'},
  TextInput: {
    width: '85%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#efefef',
    height: '100%',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
  },
  title: {fontSize: 17, fontWeight: 'bold'},
  body: {marginRight: 10, marginLeft: 80},
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#efefef',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
