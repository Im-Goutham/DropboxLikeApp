import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title,  Content, List, ListItem, Switch , Thumbnail} from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from "react-native-modal";
import Share, {ShareSheet, Button} from 'react-native-share';

class EditModal extends Component {

    constructor(props){
      super(props);
      this.state = {
           showModal: props.showModal
      }
    }

    componentWillReceiveProps(newProps){
          if(newProps.showModal != this.state.showModal){
              this.setState({showModal: newProps.showModal});
          }
    }


    render() {
      let {showModal} = this.state;
      let shareOptions = {
         title: "React Native",
         message: "Hola mundo",
         url: "http://facebook.github.io/react-native/",
         subject: "Share Link" //  for email
       };
       return (
         <View style={styles.container}>
         <Modal
           isVisible={showModal}
           backdropColor='black'
           backdropOpacity={0.20}
           onSwipeThreshold={100}
           swipeDirection='down'
           style={styles.bottomModal}
           onSwipe={() => alert('came here')}
           onBackdropPress={() => this.props.closeModal(false)}
           onBackButtonPress={() => this.props.closeModal(false)}
         >
           <View style={styles.modalContent}>
               <List itemDivider={false}>
                 <ListItem >
                   <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                   <Body>
                     <Text> My services.pdf</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon onPress={()=>{ Share.open(shareOptions) }}>
                   <Left>
                     <Icon name="md-share" />
                   </Left>
                   <Body>
                     <Text>Share</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="md-cloud-download" />
                   </Left>
                   <Body>
                     <Text>Make available offline</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="ios-star" />
                   </Left>
                   <Body>
                     <Text>Add to favorite</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="ios-paper-outline" />
                   </Left>
                   <Body>
                     <Text>Rename</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="ios-copy-outline" />
                   </Left>
                   <Body>
                     <Text>Copy</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="ios-move" />
                   </Left>
                   <Body>
                     <Text>Move</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="md-trash" />
                   </Left>
                   <Body>
                     <Text>Delete</Text>
                   </Body>
                 </ListItem>
               </List>
           </View>
         </Modal>
           </View>
       )
    }
}


const styles =  StyleSheet.create({
  container: {
    flexDirection: 'column',
   justifyContent: 'flex-end',
   alignItems:'flex-end',
    backgroundColor: 'white'
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});


export default EditModal;
