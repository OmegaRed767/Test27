import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
class Four extends React.Component {
  handelPress = () => {
    alert('hi');
  };
  render() {
    return (
      <View>
        <Button title="press" onPress={this.props.clck} />
      </View>
    );
  }
}
export default Four;
