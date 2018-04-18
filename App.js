/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import Row from './row';


const dim = Dimensions.get('window');

export default class App extends Component {

  
  state={
    data:[]
}


componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>{return resp.json();}).then((jsn)=>{
      this.setState({data:jsn}).catch(err=>{
        console.log(err);
      });
    });
}




  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{width:dim.width}}
        data={this.state.data}
        renderItem={({item})=>
          <Row rowElement={item}/>     
        }
        />
          

          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
