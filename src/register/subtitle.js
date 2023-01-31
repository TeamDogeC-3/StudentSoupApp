import {
    Text,
    View,
  } from 'react-native';
import {globalStyles} from '../styles/global.js'
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const Subtitle = ({text1,text2}) => {
    return (
        <View>
            <Text style={globalStyles.subtitle}> {text1} </Text>
            <Text style={globalStyles.subtitle}> {text2} </Text>
        </View>
    );
};