import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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

const AgreeAll = ({text}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={signUpStyles.agree}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: Colors.orange, false: Colors.grey }}
            >
            </CheckBox>
            <Text style={globalStyles.basic}>
                {text}
            </Text>
        </View>
    );
};
const Agree = ({text}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={signUpStyles.agree}>
            <CheckBox 
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: Colors.orange, false: Colors.lightest_grey }}
            >
            </CheckBox>
            <Text style={globalStyles.basic}>
                {text}
            </Text>
        </View>
    );
};
const Ps = ({text}) => {
    return (
        <View style={{paddingHorizontal:vw/15, paddingVertical:vh/600,}}>
            <Text style = {globalStyles.ps} >
                {text}
            </Text>
        </View>
    );
};

const AgreeTermsOfUse = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={signUpStyles.common}>

                <Title text="신규 회원가입"></Title>

                <View style={{height:vh/50}}/>

                <Level level="1"></Level>

                <View style={{height:vh/20}}/>

                <Subtitle text1="SFOO 서비스 이용약관에" text2="동의해주세요."></Subtitle>

                <View style={signUpStyles.context}>

                    <View style={{height:vh/30}}/>

                    {/* todo : AgreeAll을 활성화/비활성화하면 모든 Agree를 활성화/비활성화, Agree가 모두 활성화되어있다면 AgreeAll을 활성화, Agree가 하나라도 비활성화되어있다면 비활성화 */}
                    <AgreeAll text="모든 약관에 동의합니다."></AgreeAll>

                    <View style={{height:vh/30}}/>
                    <View style={{height:2, backgroundColor:Colors.lightest_grey}}/>
                    <View style={{height:vh/200}}/>
                    
                    {/* todo : 각 Agree 컴포넌트에 인덱스를 부여, AgreeAll을 활성화/비활성화하면 [0],[1],[2]를 활성화/비활성화, [0],[1],[2]가 활성화되어있다면 AgreeAll을 활성화 */}
                    <Agree text="[필수] 개인정보 수집 및 이용 동의"></Agree>
                    <Agree text="[필수] 개인정보 보유기간 및 이용기간"></Agree>
                    <Agree text="[선택] 광고성 정보 수신 및 마케팅 활용 동의"></Agree>

                    <View style={{height:vh/50}}/>

                    <Ps text="고객님께서는 동의를 거부할 수 있습니다."></Ps>
                    <Ps text="단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다."></Ps>

                    <View style={{height:vh/15}}/> 

                </View>
                
                {/* todo : Agree[0][1]이 활성화되어있다면 able에 true를 */}
                <OrangeButton text="동의하고 가입하기" able={true}></OrangeButton> 

            </View>

        </ScrollView>
      );
}



export default AgreeTermsOfUse;
