import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import {Content,Icon,Left,Right} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

import RNFetchBlob from 'react-native-fetch-blob';

const dirs = RNFetchBlob.fs.dirs;
const android = RNFetchBlob.android;

import Header from '../components/Header';
import AdBanner from '../components/AdBanner';
import ListViewComponent from '../components/ListViewComponent';
import GridViewComponent from '../components/GridViewComponent';
import EditModal from '../components/EditModal';
import ShareComponent from '../components/ShareComponent';

class HomeScreen extends Component {

  constructor() {
      super();
      this.state = {
           showModal: false,
           files: [
              {
                  name: 'CatHat1.jpg',
                  type: 'jpg',
                  url: 'http://www.swapmeetdave.com/Humor/Cats/CatHat1.jpg'
              },
              {
                  name: 'CatHat1.jpg',
                  type: 'jpg',
                  url: 'http://www.swapmeetdave.com/Humor/Cats/CatHat1.jpg'
              },
              {
                  name: 'CatHat1.jpg',
                  type: 'jpg',
                  url: 'http://www.swapmeetdave.com/Humor/Cats/CatHat1.jpg'
              }
           ]
      }
  }



    downloadFile(name,type,url) {


    //  https://www.dropbox.com/s/g6j4u4ewxancsrh/GouthamResume.docx.pdf

    // https://www.dropbox.com/s/fivg4ne2qad4bl5/caarya_uplo.zip

    // http://www.swapmeetdave.com/Humor/Cats/CatHat1.jpg

  //  addAndroidDownloads: {
   //     title: 'caarya_uplo.zip',
   //     useDownloadManager: true,
   //     mediaScannable: true,
   //     notification: true,
   //     description: 'File downloaded by download manager.',
   //     path: `${dirs.DownloadDir}/caarya_uplo.zip`,
   //   },

          let config =   Platform.OS === 'android' ? {
            fileCache : true,
            appendExt : type,
            path : dirs.DownloadDir + '/'+name
          } : {
            fileCache : true,
            appendExt : type
          }

          RNFetchBlob.config(config)
            .fetch('GET', url)
            .progress((received, total) => {
                console.log('progress', received / total)
            })
            .then((res) => {
              console.log('downloaded path is '+res.path())
              this.setState({ path: res.path() });
            //   android.actionViewIntent(  res.path(), 'application/zip')
          //    RNFetchBlob.ios.openDocument(res.path())
              Platform.OS === 'android' ?  android.actionViewIntent(  res.path(), 'image/jpg') :   RNFetchBlob.ios.openDocument(res.path())
            })
            .catch((err) => console.log(err));

    }




    render() {
    let {viewType} = this.props;
    let {files} = this.state;
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Home'}/>
               {
                 viewType=='grid'
                       ? <GridViewComponent
                            files={files}
                            toggleModal={(val) => {this.setState({showModal: val})}}
                            downloadFile={(name,type,url) => this.downloadFile(name,type,url)}
                          />
                       : <ListViewComponent
                            files={files}
                            toggleModal={(val) => {this.setState({showModal: val})}}
                            downloadFile={(name,type,url) => this.downloadFile(name,type,url)}
                          />
                }
               <EditModal showModal={this.state.showModal} closeModal={(val) => {this.setState({showModal: val})}}/>
               <AdBanner/>
               <ShareComponent />
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1
    }
});



export default  connect(state => {
  return { showModal: state.modal.createModal, viewType:  state.modal.viewType};
}, actions)(HomeScreen);
