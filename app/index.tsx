import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <View className='flex-1 items-center justify-center dark:text-white'>
        <Text className='text-3xl text-black font-pBold dark:text-white'> textInComponent </Text>
        <Text className='text-3xl text-black font-mBold dark:text-white'> textInComponent </Text>
        <Text className='text-3xl text-black font-rBold dark:text-white'> textInComponent </Text>
        <Text className='text-3xl text-black font-pRegular dark:text-white'> textInComponent </Text>
        <Text className='text-3xl text-black font-mRegular dark:text-white'> textInComponent </Text>
      </View>
    )
  }
}

export default Home
