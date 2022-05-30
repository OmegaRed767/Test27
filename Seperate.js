import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const Seperate = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let pop = [];
    for (let i = 0; i < 50; i++) {
      pop.push(i);
    }
    setArr(pop);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 100, backgroundColor: 'grey'}}>
        <Text>Han</Text>
      </View>
      <FlatList
        style={{flex: 1}}
        data={arr}
        renderItem={({item}) => <Text>{item}</Text>}
        onEndReached={() => alert('hi')}
      />
    </View>
  );
};

export default Seperate;
