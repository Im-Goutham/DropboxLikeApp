import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from  'native-base';
import * as actions from '../actions';


import Header from '../components/Header';
import AdBanner from '../components/AdBanner';
import Account from '../components/Account';

class AccountScreen extends Component {


    render() {
        console.log('came into account page')
       return (
           <View style={{flex:1}}>
           <Header navigation={this.props.navigation} title={'Account'}/>
            <Account/>
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
})


export default connect(state => {
  return { user: state.user.user };
}, actions)(AccountScreen);
