import {
    Text
  } from 'react-native';
  
import { globalStyles } from '../styles/global.js'
import { TouchableOpacity } from 'react-native';
import Colors from '../styles/colors.js'
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export function OrangeButton({text,able}){
    return (
        <TouchableOpacity style={{ backgroundColor: able?Colors.orange:Colors.grey, height:vh/15, justifyContent:'center', borderRadius:5, marginVertical:vh/200}}>
            <Text style={globalStyles.orangeButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};
export function WhiteButton({text}){
    return (
        <TouchableOpacity style={{ backgroundColor: Colors.white, borderColor: Colors.orange, borderWidth:1, height:vh/15, justifyContent:'center', borderRadius:5, marginVertical:vh/200}}>
            <Text style={globalStyles.whiteButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
export default {OrangeButton, WhiteButton};