import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
//functional components
//another comment
//last comment
const Setting = ({navigation, route}) => {
  return (
    <View>
      <Text>This is from Setting{route.params.data}</Text>
    </View>
  );
};
export default Setting;
