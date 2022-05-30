import React, {Component, useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

class One extends Component {
  constructor() {
    super();
    this.state = {
      arr: new Array(20).fill('55'),
    };
  }

  renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: 'steelblue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={drag}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 32,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <DraggableFlatList
          data={this.state.arr}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          onDragEnd={({data}) => this.setState({data})}
        />
      </View>
    );
  }
}

export default One;
