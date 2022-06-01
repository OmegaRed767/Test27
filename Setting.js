import React, {useState, useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const Setting = ({navigation, route}) => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [obj1, setObj] = useState({});

  const handelPress = d => {
    // alert(d);
    let obj = {
      ...obj1,
    };
    console.log(typeof d);
    if (obj.hasOwnProperty(d)) {
      if (obj[d] >= 1) {
        obj[d] = obj[d] - 1;
      } else {
        delete obj[d];
      }
    } else {
      obj[d] = 1;
    }
    console.log(obj);
    setObj(obj);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
        backgroundColor: 'black',
      }}>
      {data.map(val => (
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => handelPress(val)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'powderblue',
                borderColor: 'steelblue',
                borderWidth: 2,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>{val}</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: -6,
                  right: -6,
                }}>
                <Text>{obj1[val]}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default Setting;
