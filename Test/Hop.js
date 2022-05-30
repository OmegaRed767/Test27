import React, {Component, useRef} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Svg, Text as SvgText} from 'react-native-svg';
import reshaper from 'arabic-persian-reshaper';
// const reshaper = require('arabic-persian-reshaper');
const Hop = () => {
  const refer = useRef(null);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Svg style={{marginTop: 50}}>
        {/* <SvgText
          fill="black"
          // stroke="purple"
          fontSize="30"
          fontWeight="bold"
          x="100"
          y="20"
          textAnchor="middle">
          مايو
        </SvgText> */}
        <SvgText
          fill="black"
          // stroke="purple"
          fontSize="30"
          fontWeight="bold"
          x="100"
          y="20"
          textAnchor="middle">
          {reshaper.PersianShaper.convertArabic('مايو')}
        </SvgText>
      </Svg>
    </View>
  );
};

export default Hop;
