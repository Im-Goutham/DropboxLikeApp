import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Thumbnail, Body, Left, Right, Icon, Button } from 'native-base';

class ListViewComponent extends Component {

    render() {
       return (
          <Content style={{backgroundColor:'white'}}>
              <List>
                <ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>
                <ListItem>
                 <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                 <Body>
                   <Text style={{margin:0}}>Sankhadeep</Text>
                   <Text note>Its time to build a difference . .</Text>
                 </Body>
                 <Right>
                  <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                     <Icon name="md-more" style={{color:'black'}} />
                  </Button>
                 </Right>
               </ListItem>
               <ListItem>
                  <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                  <Body>
                    <Text>Sankhadeep</Text>
                    <Text note>Its time to build a difference . .</Text>
                  </Body>
                  <Right>
                    <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                       <Icon name="md-more" style={{color:'black'}} />
                    </Button>
                  </Right>
                </ListItem>
                <ListItem itemDivider>
                  <Text>B</Text>
                </ListItem>
                <ListItem>
                   <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                   <Body>
                     <Text>Sankhadeep</Text>
                     <Text note>Its time to build a difference . .</Text>
                   </Body>
                   <Right>
                     <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                       <Icon name="md-more" style={{color:'black'}} />
                    </Button>
                   </Right>
                 </ListItem>
                 <ListItem itemDivider>
                   <Text>C</Text>
                 </ListItem>
                 <ListItem>
                    <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note>Its time to build a difference . .</Text>
                    </Body>
                    <Right>
                      <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                         <Icon name="md-more" style={{color:'black'}} />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem>
                     <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                     <Body>
                       <Text>Sankhadeep</Text>
                       <Text note>Its time to build a difference . .</Text>
                     </Body>
                     <Right>
                       <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                         <Icon name="md-more" style={{color:'black'}} />
                      </Button>
                     </Right>
                   </ListItem>
                   <ListItem>
                      <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                      <Right>
                        <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                           <Icon name="md-more" style={{color:'black'}} />
                        </Button>
                      </Right>
                    </ListItem>
                    <ListItem itemDivider>
                      <Text>D</Text>
                    </ListItem>
                    <ListItem>
                       <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                       <Body>
                         <Text>Sankhadeep</Text>
                         <Text note>Its time to build a difference . .</Text>
                       </Body>
                       <Right>
                         <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                             <Icon name="md-more" style={{color:'black'}} />
                        </Button>
                       </Right>
                     </ListItem>
                     <ListItem>
                        <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                        <Body>
                          <Text>Sankhadeep</Text>
                          <Text note>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                          <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                             <Icon name="md-more" style={{color:'black'}} />
                          </Button>
                        </Right>
                      </ListItem>
                      <ListItem>
                         <Thumbnail square size={20} style={{height:40,width:40}} source={require('../assets/images/pdf-logo.png')} />
                         <Body>
                           <Text>Sankhadeep</Text>
                           <Text note>Its time to build a difference . .</Text>
                         </Body>
                         <Right>
                           <Button transparent light  onPress={() => {this.props.toggleModal(true)}}>
                             <Icon name="md-more" style={{color:'black'}} />
                          </Button>
                         </Right>
                       </ListItem>
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
