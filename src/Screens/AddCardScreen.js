import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Header from '../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default class AddCardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/addcardbg.png')}
          style={{flex: 1}}>
          <Header
            navigation={navigation}
            variant="dark"
            headerName="Add Card"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{display: 'flex', alignItems: 'center'}}
                onPress={() => {
                  navigation.navigate('NewPersonalCard1');
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={130}
                  height={130}
                  viewBox="0 0 170 170">
                  <G data-name="Group 629" transform="translate(-131 -148)">
                    <Circle
                      data-name="Ellipse 3"
                      cx={85}
                      cy={85}
                      r={85}
                      transform="translate(131 148)"
                      fill="#f3f3f3"
                    />
                    <Path
                      data-name="Path 2258"
                      d="M252.288 278.939v9.761a1.988 1.988 0 01-1.989 1.989h-72.6a1.988 1.988 0 01-1.989-1.989v-9.761a18.542 18.542 0 0118.545-18.54 10.3 10.3 0 008.642-4.689c1.843-2.833 1.653-5.3 1.653-7.287l.037-.092a24.617 24.617 0 01-15.204-22.75v-.778a6.132 6.132 0 01-6.216-6.1v-10.335c-.08-3.6.085-16.285 9.249-25.119 10.659-10.27 27.546-9.43 39.778-3.937a.5.5 0 01-.017.915l-3.194 1.314a.5.5 0 00.137.955l1.549.167a25.088 25.088 0 0118.727 11.76.155.155 0 01-.025.181 15.038 15.038 0 00-4.3 10.529v13.208a6.462 6.462 0 01-6.464 6.462v.778a24.617 24.617 0 01-15.2 22.749l.037.092c0 1.935-.205 4.431 1.653 7.287a10.3 10.3 0 008.642 4.689 18.542 18.542 0 0118.545 18.54z"
                      fill="#ffd6a6"
                    />
                    <Path
                      data-name="Path 2259"
                      d="M249.398 194.423a.152.152 0 01-.025.181 15.049 15.049 0 00-4.3 10.53v13.207a6.462 6.462 0 01-6.464 6.462v-13.569a1.986 1.986 0 00-2.565-1.9 26.71 26.71 0 01-13.6.8c-8.647-1.88-11.1-5.268-18.15-6.962a12.108 12.108 0 00-14.98 11.869c.015 2.538.057 5.711.062 9.761a6.132 6.132 0 01-6.204-6.1v-10.333c-.08-3.6.085-16.285 9.249-25.119 10.651-10.271 27.542-9.43 39.772-3.938a.5.5 0 01-.016.914l-3.19 1.313a.5.5 0 00.136.954l1.549.166a25.083 25.083 0 0118.726 11.764z"
                      fill="#42434d"
                    />
                    <Path
                      data-name="Path 2260"
                      d="M236.047 209.332a1.985 1.985 0 012.565 1.9v14.348a24.614 24.614 0 11-49.228 0c0-4.538-.046-7.762-.062-10.539a12.108 12.108 0 0114.981-11.87c7.054 1.693 9.5 5.082 18.15 6.962a26.714 26.714 0 0013.594-.801z"
                      fill="#ffdfba"
                    />
                    <Path
                      data-name="Path 2261"
                      d="M252.288 278.943v9.761a1.989 1.989 0 01-1.989 1.989h-72.6a1.989 1.989 0 01-1.989-1.989v-9.761a18.544 18.544 0 0118.544-18.54 10.294 10.294 0 008.644-4.689 17.066 17.066 0 0022.2 0 10.294 10.294 0 008.644 4.689 18.544 18.544 0 0118.544 18.54z"
                      fill="#42434d"
                    />
                    <Path
                      data-name="Path 2262"
                      d="M234.138 286.462h-5.967a1.989 1.989 0 010-3.978h5.967a1.989 1.989 0 010 3.978z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2263"
                      d="M204.274 266.404a10.113 10.113 0 01-2.963.458 18.593 18.593 0 00-18.638 18.481v1.869a3.481 3.481 0 01-3.481 3.481H177.7a1.989 1.989 0 01-1.989-1.989v-9.761a18.544 18.544 0 0118.544-18.54 10.294 10.294 0 008.644-4.689 17.206 17.206 0 002.365 1.7 4.967 4.967 0 01-.99 8.99z"
                      fill="#4d4e59"
                    />
                    <Path
                      data-name="Path 2264"
                      d="M223.725 266.404a10.113 10.113 0 002.963.458 18.593 18.593 0 0118.638 18.481v1.869a3.481 3.481 0 003.481 3.481h1.492a1.989 1.989 0 001.989-1.989v-9.761a18.544 18.544 0 00-18.544-18.54 10.294 10.294 0 01-8.644-4.689 17.208 17.208 0 01-2.365 1.7 4.967 4.967 0 00.99 8.99z"
                      fill="#2c2c33"
                    />
                    <Path
                      data-name="Path 2265"
                      d="M223.729 252.504a24.682 24.682 0 01-19.458 0 15.407 15.407 0 00.281-4.082l.037-.092a24.665 24.665 0 0018.821 0l.037.092a15.4 15.4 0 00.282 4.082z"
                      fill="#f7c388"
                    />
                    <Path
                      data-name="Path 2266"
                      d="M232.172 180.229c-2.344.964-2.863 1.3-3.939 1.126-19.724-3.243-35.261 7.068-37.384 27.224a3.029 3.029 0 01-.285 1.02c-1.513 3.08-1.244 5.359-1.212 9.149.034 3.987-5.974 4.242-6.176.26-.013-.249-.008.407-.008-10.641-.08-3.6.085-16.285 9.249-25.119 10.655-10.269 27.544-9.429 39.777-3.936a.5.5 0 01-.017.915z"
                      fill="#4d4e59"
                    />
                    <Path
                      data-name="Path 2267"
                      d="M208.429 241.477c4.045 2.53.853 8.738-3.575 6.961a24.619 24.619 0 01-15.469-22.861c0-4.543-.046-7.751-.062-10.539a12.112 12.112 0 011.99-6.749 2.989 2.989 0 015.469 1.777c.016 2.8.062 5.991.062 10.539a24.437 24.437 0 0011.585 20.872z"
                      fill="#ffebd2"
                    />
                  </G>
                </Svg>
                <Text style={{fontSize: 16, color: WHITE}}>Personal</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{display: 'flex', alignItems: 'center'}}
                onPress={() => {
                  navigation.navigate('NewBuisnessCard');
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={130}
                  height={139.368}
                  viewBox="0 0 170 179.368">
                  <G data-name="Group 630" transform="translate(-129 -546.632)">
                    <Circle
                      data-name="Ellipse 312"
                      cx={85}
                      cy={85}
                      r={85}
                      transform="translate(129 556)"
                      fill="#f3f3f3"
                    />
                    <G data-name="Group 611">
                      <G data-name="Group 610">
                        <Path
                          data-name="Path 2268"
                          d="M168.252 596.582a16.65 16.65 0 1116.65-16.65 16.669 16.669 0 01-16.65 16.65z"
                          fill="#80bfff"
                        />
                      </G>
                    </G>
                    <G data-name="Group 613">
                      <G data-name="Group 612">
                        <Path
                          data-name="Path 2269"
                          d="M259.826 596.582a16.65 16.65 0 1116.65-16.65 16.669 16.669 0 01-16.65 16.65z"
                          fill="#69f"
                        />
                      </G>
                    </G>
                    <G data-name="Group 615">
                      <G data-name="Group 614">
                        <Path
                          data-name="Path 2270"
                          d="M176.577 688.71h-16.65a4.159 4.159 0 01-4.138-3.748L152 646.53h-4.838a4.16 4.16 0 01-4.162-4.162v-20.812a25.114 25.114 0 0150.227 0v20.812a4.16 4.16 0 01-4.162 4.162H184.5l-3.788 38.432a4.159 4.159 0 01-4.138 3.748z"
                          fill="#80bfff"
                        />
                      </G>
                    </G>
                    <G data-name="Group 616">
                      <Path
                        data-name="Path 2271"
                        d="M268.151 688.71h-16.65a4.159 4.159 0 01-4.138-3.748l-3.788-38.432h-4.561a4.16 4.16 0 01-4.163-4.162v-20.812a25.114 25.114 0 0150.227 0v20.812a4.16 4.16 0 01-4.162 4.162h-4.838l-3.788 38.432a4.159 4.159 0 01-4.139 3.748z"
                        fill="#69f"
                      />
                    </G>
                    <G data-name="Group 617">
                      <Path
                        data-name="Path 2272"
                        d="M218.202 588.59l-4.162 16.317-4.163-16.317a29.154 29.154 0 00-24.975 28.8v24.975a4.122 4.122 0 004.162 4.162h9.324l3.163 38.35a4.173 4.173 0 004.162 3.83h16.65a4.173 4.173 0 004.162-3.83l3.163-38.35h9.324c2.331 0 2.775-1.832 2.775-4.162V617.39c.002-14.648-9.516-26.8-23.585-28.8z"
                        fill="#9ef"
                      />
                    </G>
                    <G data-name="Group 618">
                      <Path
                        data-name="Path 2273"
                        d="M214.039 588.256a20.812 20.812 0 1120.812-20.812 20.834 20.834 0 01-20.812 20.812z"
                        fill="#9ef"
                      />
                    </G>
                    <Path
                      data-name="Path 2274"
                      d="M222.364 688.71a4.173 4.173 0 004.162-3.83l3.163-38.35h9.324a4.122 4.122 0 004.162-4.162V617.39a29.154 29.154 0 00-24.975-28.8l-4.161 16.316v83.8z"
                      fill="#80bfff"
                    />
                    <Path
                      data-name="Path 2275"
                      d="M234.851 567.444a20.834 20.834 0 00-20.812-20.812v41.624a20.834 20.834 0 0020.812-20.812z"
                      fill="#80bfff"
                    />
                    <G data-name="Group 619">
                      <Path
                        data-name="Path 2276"
                        d="M218.202 588.589v28.8a4.162 4.162 0 01-8.325 0v-28.8a26.2 26.2 0 018.325 0z"
                        fill="#47568c"
                      />
                    </G>
                    <Path
                      data-name="Path 2277"
                      d="M218.201 617.393v-28.8a22.811 22.811 0 00-4.162-.337v33.3a4.122 4.122 0 004.162-4.163z"
                      fill="#29376d"
                    />
                  </G>
                </Svg>
                <Text style={{fontSize: 16, color: SECONDARY}}>Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
