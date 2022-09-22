import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {User} from '../../data/User';
const ImageBox = ({navigation}) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {User.map((story, index) => (
          <View key={index} style={styles.header}>
            <View style={styles.headertext}>
              <View style={styles.badge}>
                <Text>{story.numberone}</Text>
                <Text>{story.numbertwo}</Text>
              </View>
              <View style={styles.badge2}>
                <View style={{marginTop: 5, left: 5}}>
                  <Text style={styles.textbadge}>{story.titleone}</Text>
                  <Text style={styles.textbadge}>{story.titletwo}</Text>
                </View>
                <View style={styles.body}>
                  <View style={{marginTop: 5}}>
                    <Text>{story.textone}</Text>
                  </View>
                  <View style={styles.footerBadge}>
                    <Text style={styles.text}>{story.texttwo}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={story.imgUrl} style={styles.imgs} />
              </TouchableOpacity>
            </View>
            <View style={styles.footer}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  header: {marginTop: 15, width: 250, left: 10, height: 270, marginRight: 10},
  headertext: {
    height: 270,
    borderRadius: 20,
  },
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    elevation: 15,
  },
  text: {color: '#5766c7', fontWeight: 'bold'},
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  footer: {
    width: '70%',
    height: 270,
    borderRadius: 20,
    left: 15,
  },

  footerBadge: {
    width: 60,
    height: 30,
    backgroundColor: '#eceeff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  badge: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: '77%',
    top: 10,
    width: 45,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  badge2: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '58%',
    left: 15,
    width: '87%',
    height: 100,
    borderRadius: 12,
    zIndex: 90,
  },
  textbadge: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
