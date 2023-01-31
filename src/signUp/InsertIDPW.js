import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {signUpStyles} from '../styles/signUp.js'
import {globalStyles} from '../styles/global.js'
import {Colors} from '../styles/colors.js';
import { OrangeButton } from '../common/orangeButton.js';
import { Level } from './signUpLevel.js';
import { Title } from './title.js';
import { Subtitle } from './subtitle.js';
import { Dimensions } from 'react-native'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const Ps = ({text, able}) => {
    return (
        <View style={{marginRight:vw/30, marginBottom:vh/60}}>
            <Text style = {[globalStyles.ps, {color:able?Colors.orange:Colors.grey}]} >
                {text}
            </Text>
        </View>
    );
};

const InsertIDPW = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={signUpStyles.common}>

                <Title text="신규 회원가입"></Title>

                <View style={{height:vh/50}}/>

                <Level level="2"></Level>

                <View style={{height:vh/20}}/>

                <Subtitle text1="로그인에 사용될 아이디/비밀번호를" text2="입력해주세요."></Subtitle>

                <View style={signUpStyles.context}>

                    <View style={{height:vh/30}}/>

                    {/* todo : TextInput마다 인덱스를 부여하여 배열에 텍스트를 집어넣는다, [0]:ID, [1]:PW, [2]:PWcheck */}
                    <Text style={globalStyles.basic}>ID</Text>
                    <TextInput style={globalStyles.textInput} placeholderTextColor={Colors.grey} placeholder="아이디 입력"></TextInput>
                    {/* todo : 기본값 false, '다음' 버튼을 눌렀을 때 아이디가 중복되었는지 확인하여 갱신 */}
                    <Ps text={"중복된 아이디입니다."} able={false}/>

                    <View style={{height:vh/200}}/>

                    <Text style={globalStyles.basic}>PW</Text>
                    <TextInput style={globalStyles.textInput} placeholderTextColor={Colors.grey} placeholder="비밀번호 입력"></TextInput>
                    <View style={{flexDirection:'row'}}>
                        {/* todo : 각 조건에 부합할 경우 갱신 */}
                        <Ps text={"대소문자 ✓"} able={true}/>
                        <Ps text={"숫자 ✓"} able={true}/>
                        <Ps text={"8-20자 이내 ✓"} able={true}/>
                    </View>
                    
                    <TextInput style={globalStyles.textInput} placeholderTextColor={Colors.grey} placeholder="비밀번호 확인"></TextInput>
                    {/* todo : [1]과 [2]가 같을 경우 able=true */}
                    <Ps text={"비밀번호 일치 ✓"} able={true}/>
                    {/* √ ✓ ✔ */}

                    <View style={{height:vh/15}}/>

                </View>
                
                {/* todo : 모든 조건이 충족할 경우 */}
                <OrangeButton text="다음" able={true}></OrangeButton> 

            </View>

        </ScrollView>
      );
}



export default InsertIDPW;
