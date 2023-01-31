import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton, Group} from 'react-native-paper';
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
function Email(){
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('gmail');
    const [items, setItems] = useState([
        {label: '@gmail.com', value: 'gmail'},
        {label: '@naver.com', value: 'naver'},
        {label: '@abc.com', value: 'abc'},
        {label: '@ABC.com', value: 'ABC'},
    ]);

    return (
        <View>
            <Text style={globalStyles.basic}>이메일</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <TextInput style={[globalStyles.textInput, {width:vw*0.425}]} placeholderTextColor={Colors.grey} placeholder="이메일 입력"></TextInput>
                </View>

                <View>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
                        style={[globalStyles.dropDownPicker, {width:vw*0.425}]}
                        colors={Colors.grey}
                        dropDownContainerStyle={[globalStyles.dropDownContainer, {width:vw*0.425}]}
                        textStyle={globalStyles.basic}
                        listItemLabelStyle={globalStyles.basic}
                    />
                </View>
            </View>
        </View>
    )
}
function School(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
        {label: '청운대학교', value: 'top1'},
        {label: '서울대학교', value: 'top2'},
        {label: '연세대학교', value: 'top3'},
        {label: '고려대학교', value: 'top4'},
    ]);

    return (
        <View>
            <Text style={globalStyles.basic}>학교</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                <View>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
                        placeholder="학교 선택"
                        translation={{NOTHING_TO_SHOW:"결과 없음"}}
                        searchable={true}
                        searchTextInputStyle={globalStyles.basic}
                        searchTextInputProps={globalStyles.dropDownSearch}
                        searchPlaceholder="학교 검색"
                        placeholderStyle={globalStyles.basic_grey}
                        textStyle={globalStyles.basic}
                        style={[globalStyles.dropDownPicker, {width:vw*0.9}]}
                        colors={Colors.grey}
                        dropDownContainerStyle={[globalStyles.dropDownContainer,{width:vw*0.9}]}
                        listItemLabelStyle={globalStyles.basic}
                    />
                </View>
            </View>
        </View>
    )
}
function Additional(){
    const ITEMS = [
        {label: '컴퓨터공학과', value: 'pc'},
        {label: '전자공학과', value: 'pikachu'},
        {label: '건축공학과', value: 'minecraft'},
        {label: '간호학과', value: 'medic'},
        {label: '경영학과', value: 'ceo'},
        {label: '김장학과', value: 'kimchi'},
        {label: '오징어심리학과', value: 'squid'},
    ]
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState(ITEMS);

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={globalStyles.basic}>닉네임</Text>
                    <TextInput style={[globalStyles.textInput, {width:vw*0.425}]} placeholderTextColor={Colors.grey} placeholder="닉네임 입력"></TextInput>
                </View>

                <View style={{flexDirection:'column'}}>
                    <Text style={globalStyles.basic}>전공</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
                        placeholder="전공 선택"
                        placeholderStyle={globalStyles.basic_grey}
                        searchable={true}
                        searchTextInputStyle={globalStyles.basic}
                        searchTextInputProps={globalStyles.dropDownSearch}
                        searchPlaceholder="전공 검색"
                        translation={{NOTHING_TO_SHOW:"결과 없음"}}
                        textStyle={globalStyles.basic}
                        style={[globalStyles.dropDownPicker, {width:vw*0.425}]}
                        colors={Colors.grey}
                        dropDownContainerStyle={[globalStyles.dropDownContainer, {width:vw*0.425}]}
                        listItemLabelStyle={globalStyles.basic}
                    />
                </View>
            </View>
        </View>
    )
}

function InsertPersonalData(){
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

                    <Gender></Gender>

                    <View style={{height:vh/200}}/>

                    <Email></Email>

                    <View style={{height:vh/200}}/>

                    <School></School>

                    <View style={{height:vh/200}}/>

                    <Additional></Additional>

                    <View style={{height:vh/40}}/>

                </View>
                
                {/* todo : 모든 조건이 충족할 경우 */}
                <OrangeButton text="완료" able={true}></OrangeButton> 

            </View>

        </ScrollView>
    );
}

export default InsertPersonalData;
