import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
const FiltersContent = ({item, index, show, onClick}) => {
  return (
    <View>
      {!show ? (
        <TouchableOpacity
          key={index}
          onPress={onClick}
          style={{
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View>{item.icon}</View>
            <View style={{marginLeft: 5}}>
              <Text>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onClick} style={styles.body}>
          <View style={{flexDirection: 'row'}}>
            <View>{item.icon}</View>
            <View style={{marginLeft: 5}}>
              <Text>{item.name}</Text>
            </View>
          </View>

          <View>{item.imgurl}</View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FiltersContent;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 45,
    borderRadius: 10,
    padding: 10,
  },
});
