import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import Header from '../components/Header';

class MediaScreen extends Component {

    render() {
       return (
           <View style={{flex: 1}}>
            <Header navigation={this.props.navigation}  title={'Media'}/>
               <View style={styles.container}>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
               <Text>MediaScreen</Text>
              </View>
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

export default MediaScreen;
