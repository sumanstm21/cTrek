import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Row extends Component{

    // function
    //    |
    // return
    //    |
    //   then
    //    |
    //   ( ) 



    render()
    {
        return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                                      {this.props.rowElement.id}
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.text}>
                    {this.props.rowElement.title}
                </Text>
                <Text style={styles.text}>
                    {this.props.rowElement.body}
                </Text>
            </View>
        </View>);

    }


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    innerChildren: {
      flexDirection:'column',
        fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  