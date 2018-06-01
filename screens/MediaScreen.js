import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import {Icon, Button} from 'native-base';

import Header from '../components/Header';
import AdBanner from '../components/AdBanner';

import * as actions from '../actions';


class MediaScreen extends Component {


    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Media'}/>
               <View style={styles.container}>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
              </View>
               <AdBanner/>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
});


export default connect(state => {
  return { user: state.user.user };
}, actions)(MediaScreen);
