import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const PayementSelect = ({v, index, show, onClick}) => {
  return (
    <View>
      <View key={index} style={styles.header}>
        <View style={styles.radioButtonstyle}>
          <View style={{flexDirection: 'row'}}>
            {!show ? (
              <TouchableOpacity onPress={onClick}>
                {v.btnRadioff}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onClick}>
                {v.btnRadioon}
              </TouchableOpacity>
            )}
            <View>
              <Text style={styles.text}>{v.name}</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.footer}>{v.text}</Text>
              <Image source={v.imgUrl} style={styles.imgestyle} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PayementSelect;

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    borderRadius: 10,
    width: '100%',
    height: 65,
    borderWidth: 1,
    borderColor: '#f7f7f7',
    backgroundColor: '#f7f7f7',
  },
  radioButtonstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {padding: 19, color: '#000', fontWeight: '700'},
  footer: {
    padding: 14,
    color: '#5766c7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgestyle: {width: 25, height: 25, marginTop: 17, marginRight: 10},
});
