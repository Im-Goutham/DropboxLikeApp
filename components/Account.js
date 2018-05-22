import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Content, List, ListItem,  Left, Body, Right, Button, Icon, Title, Switch, Separator } from 'native-base'


class AccountComponent extends Component {

    render() {

       return (
         <Content style={{backgroundColor:'white'}}>
          <List>
           <Separator bordered />
            <ListItem>
              <Body>
                 <Text style={{color:'black',fontSize:18}}>Chetan  Detroja</Text>
              </Body>
              <Right>
                  <Icon name="ios-contact"  style={{color:'black',fontSize:30}}/>
              </Right>
            </ListItem>
            <Separator bordered />
            <ListItem>
              <Body style={{flexDirection:'row',flex:1}}>
              <View style={{alignItems:'flex-start',flex:1}}>
                <Text style={{color:'black',fontSize:18}}>Email</Text>
              </View>
              <View style={{alignItems:'flex-end',flex:3}}>
                <Text style={{color:'black',fontSize:18}}>chetandetroja@gmail.com</Text>
              </View>
              </Body>
            </ListItem>
            <ListItem>
              <Left>
                 <Text style={{color:'black',fontSize:18}}>Space used</Text>
              </Left>
              <Body style={{alignItems:'flex-end'}}>
                 <Text style={{color:'black',fontSize:18}}>200 MB of 50 GB</Text>
              </Body>
            </ListItem>
            <Separator bordered />
            <ListItem>
              <Left>
                 <Text style={{color:'black',fontSize:18}}>Plan</Text>
              </Left>
              <Body style={{alignItems:'flex-end'}}>
                <Text style={{color:'black',fontSize:18}}>Freemium</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Left>
                 <Text style={{color:'black',fontSize:18}}>Upgrade  your  Plan</Text>
              </Left>
              <Right/>
            </ListItem>
            <ListItem>
              <Left>
                 <Text style={{color:'black',fontSize:18}}>Restore  purchases</Text>
              </Left>
              <Right/>
            </ListItem>
            <Separator bordered />
            <ListItem>
              <Left>
                 <Text style={{color:'red',fontSize:18}}>Signout</Text>
              </Left>
              <Right/>
            </ListItem>
            <Separator bordered />
          </List>
        </Content>
       )
    }
}

export default AccountComponent;
