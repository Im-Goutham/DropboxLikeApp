import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button , Icon} from 'native-base';

import Header from '../components/Header';


class FavoriteScreen extends Component {

    render() {
        console.log('came into favorite page')
       return (
           <View style={{flex:1}}>
           <Header navigation={this.props.navigation}  title={'Favorite'}/>
             <View style={styles.container}>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen</Text>
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

export default FavoriteScreen;
