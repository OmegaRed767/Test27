import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>this is from Home page</Text>
      <Button
        title="setting"
        onPress={() => navigation.navigate('Setting', {data: '99.9'})}
      />
    </View>
  );
};
export default Home;
