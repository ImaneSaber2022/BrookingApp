import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ChosseInteresset = ({index, item}) => {
  const [show, setshow] = useState(false);
  return (
    <TouchableOpacity
      key={index}
      style={
        show
          ? [
              styles.borderButtonBefor,
              {borderColor: '#5766c7', backgroundColor: '#fff'},
            ]
          : styles.borderButtonBefor
      }
      onPress={() => setshow(!show)}>
      {show && (
        <View style={{marginRight: 5}}>
          <Ionicons name="checkmark-sharp" size={20} color={'#5766c7'} />
        </View>
      )}
      <View style={styles.buttonText}>
        <Text
          style={
            show
              ? [styles.styletEXTafter, {color: '#5766c7'}]
              : styles.styletEXTafter
          }>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChosseInteresset;

const styles = StyleSheet.create({
  borderButtonBefor: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  styletEXTafter: {
    color: '#000',
  },
});
