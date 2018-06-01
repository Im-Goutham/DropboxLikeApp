import React, { Component } from 'react';
import {View, StyleSheet, FlatList, Image , Text} from 'react-native';
import { Icon } from 'native-base';


class GridViewComponent extends Component {


  renderItem({ item, index }) {
    return <View style={{
        flex: 1,
        margin: 10,
        width: 70,
        height: 90,
        maxHeight:304,
        alignItems: 'center'
    }}>
       <Image style={{height:50,width:50}} source={require('../assets/images/pdf-logo.png')} />
       <View style={{marginTop:5}}>
       <Text numberOfLines={1}>{item.name}</Text>
       </View>
       <View>
          <Icon name="ios-more"  onPress={() => this.props.toggleModal(true)}/>
       </View>
    </View>
    }
    render () {
    let {files} = this.props;
    return (<View style={{flex:1}}><FlatList
      numColumns={4}
      contentContainerStyle={styles.list}
      data={files}
      renderItem={this.renderItem.bind(this)}
    /></View>);
    }
}


const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column'
  }
});


export default GridViewComponent;
