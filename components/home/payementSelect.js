import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const PayementSelect = ({v, index, show, onClick}) => {
  return (
    <View>
      <View key={index} style={styles.header}>
        <TouchableOpacity style={{padding: 15}}  onPress={onClick}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              {!show ? (
                <TouchableOpacity >
                  {v.btnRadioff}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity >
                  {v.btnRadioon}
                </TouchableOpacity>
              )}
              <View>
                <Text style={styles.text}>{v.name}</Text>
              </View>
            </View>

            <View>{v.imgUrl}</View>
          </View>
        </TouchableOpacity>
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
    height: 60,
    borderWidth: 1,
    borderColor: '#f7f7f7',
    backgroundColor: '#f7f7f7',
  },
  radioButtonstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {color: '#000', fontWeight: '700'},
  footer: {
    padding: 14,
    color: '#5766c7',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
