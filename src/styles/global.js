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
    basic_grey: {
        fontWeight: '600',
        fontSize: 13,
        color: Colors.grey,
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
    },
    textInput: {
        fontWeight: '600',
        fontSize: 13,
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 2.5,
        marginVertical: vh/200,
        backgroundColor: Colors.white,
        width: '100%',
        paddingHorizontal: vw/20,
    },
    dropDownPicker: {
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 2.5,
        paddingLeft: vw/20,
        paddingRight: vw/40,
        marginVertical: vh/200,
        backgroundColor: Colors.white
    },
    dropDownContainer: {
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 2.5,
        paddingHorizontal: vw/40,
        backgroundColor: Colors.white
    },
    dropDownSearch: {
        borderWidth: 0,
        padding: 0,
        margin: -10,
    }
});