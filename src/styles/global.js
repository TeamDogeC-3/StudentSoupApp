import {StyleSheet} from "react-native"
import {Colors} from './colors.js'
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 35,
        color: Colors.black,
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 20,
        color: Colors.black,
    },
    basic: {
        fontWeight: '600',
        fontSize: 13,
        color: Colors.black,
    },
    ps: {
        fontWeight: '500',
        fontSize: 10,
        color: Colors.grey,
    },
    nextButton: {
        fontWeight: '500',
        fontSize: 15,
        color: Colors.white,
        textAlign:'center',
    }
});