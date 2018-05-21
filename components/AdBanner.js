import React, { Component } from 'react';
import { View } from 'react-native';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'


class AdBanner extends Component {

    constructor(props){
      super(props);
      this.state = {

      }
    }


    render() {
       return (
        <View style={{position: 'absolute',bottom: 0}}>
         <AdMobBanner
           adSize="fullBanner"
           adUnitID="ca-app-pub-3940256099942544/2934735716"
           testDevices={[AdMobBanner.simulatorId]}
           onAdFailedToLoad={error => console.log(error)}
         />
        </View>
       )
    }
}



export default AdBanner;
