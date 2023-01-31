import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import AgreeTermsOfUse from './src/signUp/AgreeTermsOfUse';
import InsertIDPW from './src/signUp/InsertIDPW';
import InsertPersonalData from './src/signUp/InsertPersonalData';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: 'red',
  };

  return(
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AgreeTermsOfUse></AgreeTermsOfUse>
      {/* <InsertIDPW></InsertIDPW> */}
      {/* <InsertPersonalData></InsertPersonalData> */}
    </SafeAreaView>
  )
};

export default App;
