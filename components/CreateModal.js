import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  Content, List, ListItem, Switch } from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from "react-native-modal";


class CreateModal extends Component {

    constructor(props){
      super(props);
      this.state = {
           showModal: false
      }
    }

    componentWillReceiveProps(newProps){
          if(newProps.showModal != this.state.showModal){
              this.setState({showModal: newProps.showModal});
          }
    }


    render() {
      let {showModal} = this.state;
      console.log('showModal is 2222 '+showModal);
       return (
         <View style={styles.container}>
         <Modal
           isVisible={showModal}
           backdropColor='black'
           backdropOpacity='0.20'
           swipeDirection='bottom'
           style={styles.bottomModal}
           onSwipe={() => this.props.closeModal(false)}
           onBackdropPress={() => this.props.closeModal(false)}
           onBackButtonPress={() => this.props.closeModal(false)}
         >
           <View style={styles.modalContent}>
               <List itemDivider={false}>
                 <ListItem icon onPress={()=>{this.props.openCamera('camera')}}>
                   <Left>
                     <Icon name="ios-camera"/>
                   </Left>
                   <Body>
                     <Text>Upload from camera</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon onPress={()=>{this.props.openCamera('gallery')}}>
                   <Left>
                     <Icon name="ios-image" />
                   </Left>
                   <Body>
                     <Text>Upload photos and videos</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="md-cloud-upload" />
                   </Left>
                   <Body>
                     <Text>Upload file</Text>
                   </Body>
                 </ListItem>
                 <ListItem icon>
                   <Left>
                     <Icon name="md-folder" />
                   </Left>
                   <Body>
                     <Text>Create folder</Text>
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
    height:200,
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


export default connect(state => {
  return { showModal: state.modal.createModal };
}, actions)(CreateModal);

//
//
//
// <View style={styles.container}>
// <Modal
//   isVisible={showModal}
//   animationIn='slideInUp'
//   backdropColor='black'
//   backdropOpacity='0.20'
//   animationInTiming={0}
//   style={styles.bottomModal}
//   onSwipe={() => this.props.toggleModal(false)}
//   onBackdropPress={() => this.props.toggleModal(false)}
// >
//   <View style={styles.modalContent}>
//       <List itemDivider={false}>
//         <ListItem icon noBorder style={{borderBottomWidth: 0}}>
//           <Left>
//             <Icon name="ios-camera"/>
//           </Left>
//           <Body>
//             <Text>Upload from camera</Text>
//           </Body>
//         </ListItem>
//         <ListItem icon noBorder>
//           <Left>
//             <Icon name="ios-image" />
//           </Left>
//           <Body>
//             <Text>Upload photos and videos</Text>
//           </Body>
//         </ListItem>
//         <ListItem icon noBorder>
//           <Left>
//             <Icon name="md-cloud-upload" />
//           </Left>
//           <Body>
//             <Text>Upload file</Text>
//           </Body>
//         </ListItem>
//         <ListItem icon noBorder>
//           <Left>
//             <Icon name="md-folder" />
//           </Left>
//           <Body>
//             <Text>Create folder</Text>
//           </Body>
//         </ListItem>
//       </List>
//   </View>
// </Modal>
//   </View>


////  ----   Normal Modal  ----   /////

//
// <View style={styles.container}>
//     <Modal
//      animationType="slide"
//      transparent={true}
//      visible={showModal}
//      onRequestClose={() =>
//        {this.props.closeModal(false)}
//      }>
//      <View style={styles.modalContent}>
//          <List itemDivider={false}>
//            <ListItem icon noBorder style={{borderBottomWidth: 0}}>
//              <Left>
//                <Icon name="ios-camera"/>
//              </Left>
//              <Body>
//                <Text>Upload from camera</Text>
//              </Body>
//            </ListItem>
//            <ListItem icon noBorder>
//              <Left>
//                <Icon name="ios-image" />
//              </Left>
//              <Body>
//                <Text>Upload photos and videos</Text>
//              </Body>
//            </ListItem>
//            <ListItem icon noBorder>
//              <Left>
//                <Icon name="md-cloud-upload" />
//              </Left>
//              <Body>
//                <Text>Upload file</Text>
//              </Body>
//            </ListItem>
//            <ListItem icon noBorder>
//              <Left>
//                <Icon name="md-folder" />
//              </Left>
//              <Body>
//                <Text>Create folder</Text>
//              </Body>
//            </ListItem>
//          </List>
//      </View>
//    </Modal>
//   </View>
