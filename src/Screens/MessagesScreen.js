import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {WHITE} from '../Constants/Colors';
import Header from '../Components/Header';
import UserMessage from '../Components/UserMessage';
import TimeStamp from '../Components/TimeStamp';
import OtherMessage from '../Components/OtherMessage';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default class ChatsDashboardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView
        style={{
          height: Height,
          width: Width,
          backgroundColor: WHITE,
          paddingBottom: 50,
        }}>
        <Header
          navigation={navigation}
          variant="account"
          userName="John Doe"
          userStatus="online"
          onPress={() => {
            navigation.navigate('Chats');
          }}
          userProfilePicture={require('../Assets/profilePic.png')}
        />
        <ScrollView style={{paddingHorizontal: 20}}>
          <UserMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit?"
          />
          <TimeStamp placeholder="Monday, 10:40 am" />
          <OtherMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit? Eius tenetur exercitationem natus doloribus impedit,
          nemo beatae corrupti."
          />
          <UserMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit?"
          />
          <TimeStamp placeholder="Monday, 10:40 am" />
          <OtherMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit? Eius tenetur exercitationem natus doloribus impedit,
          nemo beatae corrupti."
          />
          <UserMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit?"
          />
          <OtherMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit? Eius tenetur exercitationem natus doloribus impedit,
          nemo beatae corrupti."
          />
          <UserMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit?"
          />
          <OtherMessage
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores odit? Eius tenetur exercitationem natus doloribus impedit,
          nemo beatae corrupti."
          />
        </ScrollView>
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 8,
            minHeight: 50,
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <TextInput
            placeholder="Type your message"
            multiline={true}
            style={{flex: 1, paddingHorizontal: 20}}
          />
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={18}
              viewBox="0 0 17 18">
              <Defs>
                <ClipPath id="prefix__a">
                  <Path fill="none" d="M0 0h17v18H0z" />
                </ClipPath>
              </Defs>
              <G data-name="Component 24 \u2013 1" clipPath="url(#prefix__a)">
                <Path
                  data-name="Path 10"
                  d="M8.616 0L7.05 1.567 12.981 7.5H0v2.235h12.981L7.05 15.666l1.567 1.567 8.616-8.616z"
                  fill="#3c50ff"
                />
              </G>
            </Svg>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
