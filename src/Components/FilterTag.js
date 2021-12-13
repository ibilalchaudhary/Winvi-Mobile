import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function FilterTag({filterName, filterValue, onPress}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#eeeeee',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 20,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{filterName}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, marginRight: 12}}>{filterValue}</Text>
        <TouchableOpacity onPress={onPress}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 9.5 9.5">
            <Path
              data-name="Icon metro-cross"
              d="M9.413 7.632L6.529 4.75l2.884-2.878a.3.3 0 000-.42L8.052.087a.3.3 0 00-.42 0L4.75 2.972 1.868.087a.3.3 0 00-.42 0L.087 1.448a.3.3 0 000 .42L2.969 4.75.087 7.632a.3.3 0 000 .42l1.361 1.361a.3.3 0 00.42 0L4.75 6.531l2.879 2.882a.3.3 0 00.42 0l1.364-1.361a.3.3 0 000-.42z"
              fill="#113066"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}
