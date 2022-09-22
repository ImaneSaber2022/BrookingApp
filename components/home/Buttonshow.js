import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Buttonshow = ({title}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {show ? (
          <TouchableOpacity
            style={styles.borderButtonAfter}
            onPress={() => setShow(!show)}>
            <View style={styles.icon}>
              <View>
                <Feather name="user" size={20} color={'#5766c7'} />
              </View>
              <View style={styles.buttonText}>
                <Text>{title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.borderButtonBefor}
            onPress={() => setShow(true)}>
            <View style={styles.buttonText}>
              <Text>{title}</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.borderButtonBefor}>
          <View style={styles.buttonText}>
            <Text>Sports & Fetness</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttonshow;

const styles = StyleSheet.create({
  container: {padding: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textHeader: {
    fontSize: 14,
    color: 'gray',
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
});
