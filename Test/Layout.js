import React, {Component, useRef, useEffect, useState} from 'react';
import {Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';

const Layout = () => {
  const myRef = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const [scrollF, setscrollF] = useState(0);
  //   useEffect(() => {
  //     fourth.current.measure((fx, fy, width, height, px, py) => {
  //       console.log('Component width is: ' + width);
  //       console.log('Component height is: ' + height);
  //       console.log('X offset to frame: ' + fx);
  //       console.log('Y offset to frame: ' + fy);
  //       console.log('X offset to page: ' + px);
  //       console.log('Y offset to page: ' + py);
  //     });
  //   });
  //   useEffect(() => {
  //     setTimeout(() => {
  //       myRef.current.scrollTo({y: 900});
  //     }, 100);
  //   },[]);
  //   useEffect(() => {
  //     if (scrollF !== 0) {

  //       fourth.current.scrollTo({y: scrollF});
  //     }
  //   }, [scrollF]);
  return (
    <View>
      <ScrollView ref={myRef}>
        <TouchableOpacity
          onPress={() => {
            myRef.current.scrollTo({y: scrollF});
          }}>
          <View
            style={{width: 300, height: 300, backgroundColor: 'powderblue'}}
          />
        </TouchableOpacity>

        <View style={{width: 300, height: 300, backgroundColor: 'green'}} />
        <View style={{width: 300, height: 300, backgroundColor: 'yellow'}} />

        <View
          ref={fourth}
          onLayout={({nativeEvent}) => {
            if (fourth) {
              fourth.current.measure((x, y, width, height, pageX, pageY) => {
                setscrollF(pageY);
                console.log('testOne', x, y, width, height, pageX, pageY);
              });
            }
          }}
          style={{width: 300, height: 300, backgroundColor: 'steelblue'}}
        />
      </ScrollView>
    </View>
  );
};

export default Layout;
