import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Divider} from 'react-native-elements';
import FiltersContent from '../components/home/FiltersContent';
const Filters = ({navigation}) => {
  const [show, setShow] = useState(null);
  const Items = [
    {
      id: 0,
      icon: <Ionicons name="flash-outline" size={20} />,
      name: 'Any Category',
      imgurl: <Ionicons name="checkmark-sharp" size={20} color={'#2BEA1F'} />,
    },
    {
      id: 1,
      icon: <SimpleLineIcons name="pencil" size={15} />,
      name: 'Arts',
      imgurl: <Ionicons name="checkmark-sharp" size={20} color={'#2BEA1F'} />,
    },
    {
      id: 2,
      icon: <Ionicons name="person-outline" size={18} />,
      name: 'Career& Business',
      imgurl: <Ionicons name="checkmark-sharp" size={20} color={'#2BEA1F'} />,
    },
    {
      id: 3,
      icon: <Ionicons name="md-barbell" size={20} />,
      name: 'Health& Wellness',
      imgurl: <Ionicons name="checkmark-sharp" size={20} color={'#2BEA1F'} />,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headertext}>
          <Text style={styles.text}>Filters</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <Divider width={1} orientation="horizontal" color="#eceeff" />
      </View>
      <View style={{padding: 20}}>
        <View>
          <Text style={styles.fotrttext}>Dates</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <TextInput
              placeholder="April 01,2022 - april 20,2022"
              placeholderTextColor={'#000'}
              style={styles.rowtext}
            />
            <TouchableOpacity>
              <AntDesign
                name="calendar"
                size={20}
                color={'gray'}
                style={{marginTop: 11, marginRight: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerbody}>
          <View>
            <Text style={styles.iconheader}>Categories</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.iconstyle}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {Items.map((item, index) => (
            <FiltersContent
              item={item}
              index={index}
              key={index}
              show={show == item.id}
              onClick={() => setShow(item.id)}
            />
          ))}
        </View>
        <View style={styles.footerbody}>
          <View>
            <Text style={styles.iconheader}>Price</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.iconstyle}>Choose Price</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footerheader}>
          <TextInput placeholder="Any Price" placeholderTextColor={'#000'} />
          <View style={{marginTop: 10}}>
            <AntDesign name="down" size={18} color={'gray'} />
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <Text style={styles.iconheader}>Event Type</Text>
        </View>
        <TouchableOpacity style={styles.footerheader}>
          <TextInput placeholder="All Types" placeholderTextColor={'#000'} />
          <View style={{marginTop: 10}}>
            <AntDesign name="down" size={18} color={'gray'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('TabsProfil')}
          style={styles.footerstyle}>
          <View style={styles.button}>
            <Text style={styles.buutoonstyle}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  buutoonstyle: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  button: {justifyContent: 'center', alignItems: 'center', flex: 1},
  headertext: {marginRight: 10, marginLeft: 100},
  text: {fontSize: 17, fontWeight: 'bold'},
  fotrttext: {fontWeight: 'bold', fontSize: 15},
  body: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#eceeff',
    borderColor: '#eceeff',
    marginTop: 12,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  rowtext: {fontWeight: '600', marginLeft: 10},
  headerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconheader: {fontWeight: 'bold', fontSize: 15},
  iconstyle: {fontWeight: '600', fontSize: 15, color: '#5766c7'},
  footer: {
    backgroundColor: '#eceeff',
    width: '100%',
    height: 200,
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },
  footerbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceeff',
    height: 55,
    borderRadius: 10,
    padding: 8,
    marginTop: 15,
  },
  footerstyle: {
    backgroundColor: '#5766c7',
    borderRadius: 12,
    height: 50,
    marginTop: 20,
  },
});
