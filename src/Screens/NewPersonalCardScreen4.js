import React, {Component} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';

export default class NewCardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/screenbg.png')}
          style={{flex: 1}}>
          <Header
            navigation={navigation}
            variant="dark"
            headerName="New Card"
            onPress={() => {
              navigation.navigate('NewPersonalCard3');
            }}
          />
          <NewCardStepPanel
            step1={true}
            step2={true}
            step3={true}
            step4={true}
          />
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                width: '100%',
                padding: 20,
              }}>
              <OutlinedInputBox
                placeholder="Introductory Message"
                inputType="text"
              />
              <OutlinedInputBox placeholder="QR Code" inputType="text" />
              <OutlinedInputBox placeholder="Hobbies" inputType="text" />
              <OutlinedInputBox placeholder="Education" inputType="text" />
              <OutlinedInputBox placeholder="Interests" inputType="text" />
              <OutlinedInputBox placeholder="Achievements" inputType="text" />
              <OutlinedInputBox placeholder="Personal Info" inputType="text" />
              <OutlinedInputBox placeholder="Skills" inputType="text" />
              <OutlinedInputBox placeholder="Portfolio" inputType="text" />
              <OutlinedInputBox placeholder="Job History" inputType="text" />
              <BtnComponent
                placeholder="Finish"
                onPress={() => {
                  navigation.navigate('Individual');
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
