import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,TouchableHighlight, StyleSheet, ScrollView, NetInfo} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from "react-native-modal";


import CreateModal  from './CreateModal';

class HeaderComponent extends Component {

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
      let {title,showModal} = this.props;
       return (
          <Header>
           <Left style={{flex: 1}}/>
            <Body style={{flex: 1,alignItems:'center'}}>
              <Title>{title}</Title>
            </Body>
           <Right style={{flex: 1}}><Icon name="md-create"  onPress={() => this.toggleView()}/></Right>
        </Header>
       )
    }
}

export default  connect(state => {
  return { showModal: state.modal.createModal, viewType:  state.modal.viewType};
}, actions)(HeaderComponent);
