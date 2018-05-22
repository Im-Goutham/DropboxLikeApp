import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from "react-native-modal";


import CreateModal  from './CreateModal';

class HeaderComponent extends Component {

  state = {
    modalVisible: false,
  };


    render() {
      let {title,showModal} = this.props;
       return (
          <Header>
           <Left style={{flex: 1}}/>
            <Body style={{flex: 1,alignItems:'center'}}>
              <Title>{title}</Title>
            </Body>
           <Right style={{flex: 1}}/>
        </Header>
       )
    }
}

export default  connect(state => {
  return { showModal: state.modal.createModal };
}, actions)(HeaderComponent);
