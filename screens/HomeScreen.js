import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Content,Icon,Left,Right} from 'native-base';

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
           showModal: false
      }
  }
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Home'}/>
            
               {/*    <ListViewComponent toggleModal={(val) => {this.setState({showModal: val})}}/>  */}
               <ListViewComponent toggleModal={(val) => {this.setState({showModal: val})}}/>
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

export default HomeScreen;
