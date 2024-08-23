import { Image, StyleSheet, Platform, Text, View,  } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';

import { useRef } from 'react';
import { Video, ResizeMode } from 'expo-av';

export default function HomeScreen() {
  const src = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s-fmp4/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
  return (
    <View className="flex-1 items-center justify-center">
      <Text className='text-xl text-white'>Open up App.js to start working on your app!</Text>
      {/* <Video 
        source={{ uri: src }}
        ref={vidRef}
        className='absolute top-0 left-0 right-0 bottom-0'
      /> */}
       {/* <Video
        source={{ uri: src }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        className='absolute top-0 left-0 right-0 bottom-0'
        shouldPlay
        
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}


