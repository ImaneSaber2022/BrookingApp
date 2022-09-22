import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationPlus from '../components/home/NotificationPlus';
const Notification = ({navigation}) => {
  const ITEMS = [
    {
      icon: <Fontisto name="bell" size={25} color="gray" />,
      title: ' Get Alert in your phone',
      name: 'Get alert in your notification',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
    {
      icon: <AntDesign name="mail" size={25} color="gray" />,
      title: ' Get Alert in your email',
      name: 'Get alert in your email',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
    {
      icon: <Ionicons name="copy" size={25} color="gray" />,
      title: ' NewsLetters',
      name: 'Get alert in your email',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
    {
      icon: <AntDesign name="user" size={25} color="gray" />,
      title: ' Followed organizer email',
      name: 'Get alert in your email',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
    {
      icon: <Ionicons name="time-outline" size={25} color="gray" />,
      title: ' Reminders email',
      name: 'Get alert in your email',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
    {
      icon: <AntDesign name="hearto" size={25} color="gray" />,
      title: ' Liked event email',
      name: 'Get alert in your email',
      toogleoff: (
        <FontAwesome
          name="toggle-off"
          size={25}
          color="gray"
          style={{padding: 10}}
        />
      ),
      toogleon: (
        <FontAwesome
          name="toggle-on"
          size={25}
          color="#078EFA"
          style={{padding: 10}}
        />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Text style={styles.text}>Push Notification</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        {ITEMS.map((item, index) => (
          <NotificationPlus item={item} index={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
  },
  body: {marginRight: 10, marginLeft: 100},
  text: {fontSize: 17, fontWeight: 'bold'},
  footer: {padding: 20, marginTop: 10},
});
