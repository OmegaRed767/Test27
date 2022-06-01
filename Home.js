import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    let data = [];

    for (let i = 0; i < 20; i++) {
      data.push(i);
    }
    setData(data);
  }, []);
  const handelSplice = d => {
    let temp = data1.slice();
    temp.splice(d, 0, 99);
    console.log(temp);
    setData(temp);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Button title="setting" onPress={() => navigation.navigate('Setting')} />
      <FlatList
        data={data1}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity onPress={() => handelSplice(index)}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginVertical: 30,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => Math.random() - item}
      />
    </View>
  );
};
export default Home;
