import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {Icon, Button} from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob'

import Header from '../components/Header';
import AdBanner from '../components/AdBanner';

import * as actions from '../actions';

class MediaScreen extends Component {


  downloadFile() {
      this.props.connectionState(true);
     RNFetchBlob
       .config({
         // add this option that makes response data to be stored as a file,
         // this is much more performant.
         fileCache : true,
         appendExt : 'jpg',
         addAndroidDownloads : {
             // Show notification when response data transmitted
             notification : true,
             // Title of download notification
             title : 'Great ! Download Success ! :O ',
             // File description (not notification description)
             description : 'An image file.',
             mime : 'image/jpg',
             // Make the file scannable  by media scanner
             mediaScannable : true,
           }
       })
       .fetch('GET', 'https://i.ndtvimg.com/i/2018-02/teddy-day-images-pexels-650_650x400_61518152570.jpg', {
         //some headers ..
       })
       .then((res) => {
         // the temp file path
         console.log('The file saved to ', res.path())
         RNFetchBlob.android.actionViewIntent('file://' + res.path(), 'image/png');
       })
  }



  openActionSheet(){
    AlertIOS.alert(
'Sync Complete',
'All your data are belong to us.'
);
  }

    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Media'}/>
               <View style={styles.container}>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Button success onPress={()=>{this.downloadFile()}}>
                <Text>Download</Text>
              </Button>
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
