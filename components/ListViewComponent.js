import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Thumbnail, Body, Left, Right, Icon, Button } from 'native-base';

class ListViewComponent extends Component {
  _renderItem = ({item}) => (
        <ListItem>
         <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
         <Body>
           <Text style={{margin:0}}>Sankhadeep</Text>
           <Text note>Its time to build a difference . .</Text>
         </Body>
         <Right>
             <Icon name="md-more" style={{color:'black',padding:10}} onPress={() => {this.props.toggleModal(true)}}/>
         </Right>
       </ListItem>
    );
    render() {
       return (
         <FlatList
           data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}, {key: 'e'},{key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'}]}
           keyExtractor={(item, index) => item.key}
           renderItem={this._renderItem}/>
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

export default ListViewComponent;
