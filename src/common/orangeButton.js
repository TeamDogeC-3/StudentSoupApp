import {
    Text
  } from 'react-native';
  
import { signUpStyles } from '../styles/signUp.js'
import { globalStyles } from '../styles/global.js'
import { TouchableOpacity } from 'react-native';
import Colors from '../styles/colors.js'
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const OrangeButton = ({text}) => {
    return (
        <TouchableOpacity style={{backgroundColor:Colors.orange, height:vh/15, justifyContent:'center'}}>
            <Text style={globalStyles.nextButton}>{text}</Text>
        </TouchableOpacity>
    );
};