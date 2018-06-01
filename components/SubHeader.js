import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,TouchableHighlight, StyleSheet, ScrollView, NetInfo} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from "react-native-modal";
import { Col, Row, Grid } from 'react-native-easy-grid';


import CreateModal  from './CreateModal';

class SubHeader extends Component {

  state = {
    modalVisible: false,
  };

  componentDidMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
  //    console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      if(connectionInfo.type == 'none'){
           this.props.connectionState(false);
      }
      else {
          this.props.connectionState(true);
      }
    });
      NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);
 }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
  }


  _handleConnectionChange = (isConnected) => {
    this.props.connectionState(isConnected);
  };

  toggleView(){
      let {viewType} = this.props;
      viewType=='grid' ? this.props.toggleView('list') : this.props.toggleView('grid')
  }

    render() {
      let {title,viewType} = this.props;
       return (
          <View style={{flexDirection:'row',padding:20}} >
          <Left>
              <Text>Name <Icon name="ios-arrow-down" style={{fontSize:18}} /></Text>
          </Left>
          <Right>
          {
             (viewType=='grid')?  <Icon name="ios-list-outline"  onPress={() => this.toggleView()} /> :  <Icon name="md-apps"  onPress={() => this.toggleView()}/>
          }
          </Right>
        </View>
       )
    }
}

export default  connect(state => {
  return {  viewType:  state.modal.viewType};
}, actions)(SubHeader);
