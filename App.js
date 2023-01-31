import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Colors from './src/styles/colors';

import Login from './src/login/Login';
import AgreeTermsOfUse from './src/register/AgreeTermsOfUse';
import InsertIDPW from './src/register/InsertIDPW';
import InsertPersonalData from './src/register/InsertPersonalData';

const App = () => {

  return(
    <SafeAreaView style={{backgroundColor:Colors.white}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.orange}
      />
      <Login></Login>
      {/* <AgreeTermsOfUse></AgreeTermsOfUse> */}
      {/* <InsertIDPW></InsertIDPW> */}
      {/* <InsertPersonalData></InsertPersonalData> */}
    </SafeAreaView>
  )
};

export default App;
