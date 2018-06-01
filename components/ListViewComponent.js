import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Thumbnail, Body, Left, Right, Icon, Button } from 'native-base';


class ListViewComponent extends Component {

    render() {
      let {files} = this.props;
      console.log('files are '+JSON.stringify(files));

       return (
          <Content style={{backgroundColor:'white'}}>
              <List>
                {files.map((file, key) => {
                 return (
                   <React.Fragment key={key}>
                     <ListItem itemDivider>
                       <Text>A</Text>
                     </ListItem>
                     <ListItem onPress={() => this.props.downloadFile('CatHat1.jpg','jpg','http://www.swapmeetdave.com/Humor/Cats/CatHat1.jpg')}>
                      <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                      <Body>
                        <Text style={{margin:0}}>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                      <Right>
                          <Icon name="md-more" style={{color:'black',padding:10}} onPress={() => {this.props.toggleModal(true)}}/>
                      </Right>
                    </ListItem>
                 </React.Fragment>
                 );
              })}
              </List>
          </Content>
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
