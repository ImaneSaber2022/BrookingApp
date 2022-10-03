import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
 import VideoPlayer from 'react-native-video-player';
// import Video from 'react-native-video'
const PlayingVideo = () => {
  return (
    <View>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={1500}
        videoHeight={800}
        thumbnail={require('../assestes/images/image1.png')}
        autoplay={false}
        defaultMuted={true}
        controlsTimeout={2000}
        showDuration={true}
        pauseOnPress={true}
      />
    </View>
  );
};
export default PlayingVideo;
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
