import React, {Component, useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import {color} from './Colors';
import Four from './Four';
const Three = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(i);
    }
    console.log(arr);
    setData(arr);
  }, []);
  console.log('function');

  const handelPress = () => {
    // console.log(d);
    alert('hi');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.background,
      }}>
      {console.log('render')}
      <Four clck={handelPress} />
      <Button title="click" onPress={handelPress} />
      {/* <ScrollView>
        {data.map((lol, i) => (
          <View key={i}>
            <Text style={styles.txt}>{lol}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};
export default Three;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
    color: color.grey,
    paddingVertical: 2,
    alignSelf: 'center',
  },
});
