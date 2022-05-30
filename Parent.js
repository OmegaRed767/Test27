import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Parent = () => {
  const [index, setindex] = useState(true);
  handelIndex = d => {
    setindex(d);
  };
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );

            handelIndex(!index);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              borderBottomWidth: index === 0 ? 2 : 0,
              borderColor: 'black',
            }}>
            show
          </Text>
        </TouchableOpacity>

        {index && (
          <View
            style={{width: 300, height: 300, backgroundColor: 'powderblue'}}
          />
        )}
      </View>
    </View>
  );
};
export default Parent;
