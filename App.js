import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Colors from './src/styles/colors';

import AgreeTermsOfUse from './src/signUp/AgreeTermsOfUse';
import InsertIDPW from './src/signUp/InsertIDPW';
import InsertPersonalData from './src/signUp/InsertPersonalData';

const App = () => {

  return(
    <SafeAreaView style={{backgroundColor:Colors.white}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.orange}
      />
      {/* <AgreeTermsOfUse></AgreeTermsOfUse> */}
      {/* <InsertIDPW></InsertIDPW> */}
      <InsertPersonalData></InsertPersonalData>
    </SafeAreaView>
  )
};

export default App;
