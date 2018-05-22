import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, Button} from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob'

import Header from '../components/Header';
import AdBanner from '../components/AdBanner';

class MediaScreen extends Component {


  downloadFile() {
     RNFetchBlob
       .config({
         // add this option that makes response data to be stored as a file,
         // this is much more performant.
         fileCache : true,
         appendExt : 'png',
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

export default MediaScreen;
