import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import Picker from '@react-native-picker/picker';
// import RadioGroup from 'react-native-radio-buttons-group';
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

    const InsertPersonalData = () => {
        
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={signUpStyles.common}>

                <Title text="신규 회원가입"></Title>

                <View style={{height:vh/50}}/>

                <Level level="3"></Level>

                <View style={{height:vh/20}}/>

                <Subtitle text1="SFOO의 서비스를 위한 개인정보를" text2="입력해주세요."></Subtitle>

                <View style={signUpStyles.context}>

                    <View style={{height:vh/30}}/>

                    <View style={{flexDirection:'row'}}>
                        <Text style={globalStyles.basic}>성별</Text>
                    </View>

                    <Text style={globalStyles.basic}>이메일</Text>
                    <View style={{flexDirection:'row'}}>
                        {/* <Picker style={globalStyles.text_input} placeholder="이메일 입력"></Picker> */}
                        {/* <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */}
                    </View>

                    <Text style={globalStyles.basic}>학교</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={globalStyles.text_input} placeholder="이메일 입력"></TextInput>
                    </View>
                    
                    <Text style={globalStyles.basic}>닉네임</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={globalStyles.text_input} placeholder="닉네임 입력"></TextInput>
                    </View>

                    <View style={{height:vh/15}}/>

                </View>
                
                {/* todo : 모든 조건이 충족할 경우 */}
                <OrangeButton text="완료" able={true}></OrangeButton> 

            </View>

        </ScrollView>
      );
}

export default InsertPersonalData;
