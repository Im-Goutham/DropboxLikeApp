import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import CreateModal from '../components/CreateModal';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';



class CreateScreen extends Component {

    state = {
      ImageSource: null,
    };

    handleModal(data){
       this.props.toggleModal(false);
    }


    selectPhotoTapped(type) {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
      if(type=='camera'){
        ImagePicker.launchCamera(options, (response) => {
              this.imageResponse(response);
        });
      }
      else if(type=='gallery'){
        ImagePicker.launchImageLibrary(options, (response) => {
             this.imageResponse(response);
        });
      }
    }


    imageResponse(response){
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            console.log(' response.uri is '+ response.uri);
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.props.toggleModal(false);
            this.setState({

              ImageSource: source

            });
          }
    }


    selectFileTapped(){
      // iPhone/Android
        DocumentPicker.show({
           filetype: [DocumentPickerUtil.allFiles()],
         },(error,res) => {
           // Android

           if (res && res.uri) {

             console.log(
                res.uri,
                res.type, // mime type
                res.fileName,
                res.fileSize
             );
             let source = { uri: res.uri };
             // You can also display the image using data:
             // let source = { uri: 'data:image/jpeg;base64,' + response.data };
             this.props.toggleModal(false);
             this.setState({

               ImageSource: source

             });
           }
           this.props.toggleModal(false);
         });  
    }



    render() {
      let {showModal} = this.props;
      let {ImageSource} = this.state;
       return (
           <View style={{flex:1}}>
            <CreateModal
                showModal={showModal}
                closeModal={(data)=>{this.handleModal(data)}}
                openCamera={(type)=>{this.selectPhotoTapped(type)}}
                openFilePicker={()=>{this.selectFileTapped()}}
            />
            {(ImageSource)? (<Image  source={this.state.ImageSource}  style={{height: 200, width: null, flex: 1}}/>): null}
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
