import {
    Text,
    View,
  } from 'react-native';
import {globalStyles} from '../styles/global.js'
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const Title = ({text}) => {
    return (
        <View>
            <Text style={globalStyles.title}>
                {text}
            </Text>
        </View>
    );
};