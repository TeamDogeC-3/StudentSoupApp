import {
    Text,
    View,
  } from 'react-native';
import { registerStyles } from '../styles/register.js'
import Colors from '../styles/colors'

export const Level = ({level}) => {
    return (
        <View style={registerStyles.level_box_box}>
            <Level_box level={level} text="이용약관 동의" num={1}></Level_box>
            <Level_line bool={level>=2}/>
            <Level_box level={level} text="회원가입" num={2}></Level_box>
            <Level_line bool={level>=3}/>
            <Level_box level={level} text="개인정보 입력" num={3}></Level_box>
        </View>
    )
}

const Level_line = ({bool}) => {
    return(
        <View style={{flex:1, backgroundColor:bool?Colors.orange:Colors.lightest_grey, height:3, alignSelf:'center'}}></View>
    )
}

const Level_box = ({level,text,num}) => {
    return (
        <View style={[registerStyles.level_box, {flexDirection:'column'}]} >
            <Level_text/>
            <Level_circle level={level} num={num}></Level_circle>
            <Level_text text={text} color={(level<num)?Colors.grey:Colors.orange}></Level_text>
        </View> 
    )
}
const Level_circle = ({level,num}) => {
    return(
        <Text style={
                [
                    registerStyles.level_circle, 
                    {
                        backgroundColor: level<=num?Colors.invisible:Colors.orange, 
                        borderColor:level<num?Colors.lightest_grey:Colors.orange, 
                        color:level<num?Colors.grey:level<=num?Colors.orange:Colors.white
                    }
                ]
            }>
            {level>num?'✓':num} 
            {/* √ ✓ ✔ ☐ ☑ */}
        </Text>
    )
}
const Level_text = ({text,color}) => {
    return (
        <Text style={[registerStyles.level_text, {color:color}]}>{text}</Text>
    )
}