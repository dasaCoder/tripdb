import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: 'cghss'};
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text>lki{this.state.text}</Text>
        </View>
       
        <View style={{flex: 1, backgroundColor: 'steelblue'}} >
        
            <TextInput style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText= {(text)=> this.state =text}
            >
            </TextInput>

          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
