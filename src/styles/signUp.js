import {StyleSheet} from "react-native"
import {Colors} from './colors.js'
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const signUpStyles = StyleSheet.create({
    common: {
        height: vh*0.8, 
        marginTop:vh/10, 
        flex:1, 
        flexDirection:'column', 
        justifyContent:'space-between', 
        marginHorizontal:vw/20
    },
    title: {
        paddingTop: vh/12, 
        paddingBottom: vh/60,
    },
    level_box_box: {
        height: vh/8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    level_box: {
        width: vw/5,
        height: vh/8,
        alignItems:'center',
        justifyContent:'center',
    },
    level_circle: {
        width: vw/10,
        height: vw/10,
        borderWidth:3, 
        borderRadius:50, 
        marginVertical:vh/150,
        
        textAlign:'center', 
        textAlignVertical:'center', 
        color: Colors.orange,
        fontSize: vw/15,
        fontWeight: '500',
    },
    level_text: {
        fontWeight: '500',
        fontSize: vw/30,
        height: vh/25, 
        textAlign:'center', 
        textAlignVertical:'center', 
    },
    subtitle: {
        
    }
    
});