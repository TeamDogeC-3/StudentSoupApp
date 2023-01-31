import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {RadioButton, Group} from 'react-native-paper';
import {registerStyles} from '../styles/register.js'
import {globalStyles} from '../styles/global.js'
import {Colors} from '../styles/colors.js';
import { OrangeButton , WhiteButton} from '../common/buttons.js';
import { Title } from '../register/title.js';
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

function Gender(){
    const [value, setValue] = React.useState('male');
    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={globalStyles.basic}>성별</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={[globalStyles.basic, {paddingLeft:vh/20}]}>남성</Text>
                    <RadioButton value="male" color={Colors.orange} uncheckedColor={Colors.grey} />
                    <Text style={[globalStyles.basic, {paddingLeft:vh/60}]}>여성</Text>
                    <RadioButton value="female" color={Colors.orange} uncheckedColor={Colors.grey} />
                </View> 
            </RadioButton.Group>
        </View>
    )
}

function Login(){
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={registerStyles.common}>

                <Title text="로그인"></Title>

                <View style={{height:vh/50}}/>

                <View>


                    <TextInput style={globalStyles.textInput} placeholderTextColor={Colors.grey} placeholder="이메일 입력"></TextInput>
                    
                    <TextInput style={globalStyles.textInput} placeholderTextColor={Colors.grey} placeholder="비밀번호 입력"></TextInput>


                </View>
                
                {/* todo : 모든 조건이 충족할 경우 */}
                <View>
                    <OrangeButton text="로그인" able={true}></OrangeButton> 
                    <WhiteButton text="회원가입" ></WhiteButton> 
                </View>

                <Text style={[globalStyles.basic_grey,{textAlign:'center'}]}>아이디/비밀번호 찾기</Text>
                
                <View style={{height:vh/3.5}}></View>

            </View>

        </ScrollView>
    );
}

export default Login;
