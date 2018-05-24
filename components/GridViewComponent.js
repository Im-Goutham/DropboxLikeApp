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
       <Text numberOfLines={1}>2018-01...5.pdf/</Text>.
       </View>
       <View>
          <Icon name="ios-more"/>
       </View>
    </View>
    }
    render () {
    return (<FlatList
      contentContainerStyle={styles.list}
      data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}, {key: 'e'},{key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'}]}
      renderItem={this.renderItem}
    />);
    }
}


const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


export default GridViewComponent;
