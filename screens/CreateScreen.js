import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import CreateModal from '../components/CreateModal';
import * as actions from '../actions';
import { connect } from 'react-redux';

class CreateScreen extends Component {

handleModal(data){
   this.props.toggleModal(false);
}

    render() {
      let {showModal} = this.props;
      console.log('came into create page')
       return (
           <View style={{flex:1}}>
            <CreateModal showModal={showModal} closeModal={(data)=>{this.handleModal(data)}}/>
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
  return { showModal: state.modal.createModal };
}, actions)(CreateScreen);
