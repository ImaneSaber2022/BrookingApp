import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const NotificationPlus = ({item, index}) => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <View key={index} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.body}>{item.icon}</View>
        </View>
        <View style={{padding: 4}}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        {show ? (
          <TouchableOpacity onPress={() => setShow(false)}>
            {item.toogleoff}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShow(!show)}>
            {item.toogleon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NotificationPlus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 61,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginRight: 5,
    marginTop: 10,
  },
  header: {
    backgroundColor: '#eceeff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {color: 'gray'},
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {fontSize: 14, fontWeight: '800'},
});
