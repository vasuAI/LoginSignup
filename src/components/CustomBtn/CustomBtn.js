import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles'

export default function CustomBtn({text, type = 'Primary', bgColor, fgColor}) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5}
        style={[
          styles.btnCon,
          styles.BtnText,
          styles[`Btn_${type}`],
          bgColor ? {backgroundColor:bgColor}:{}
        ]}>
        <Text style={[
            styles.BtnText_Primary,
            styles[`BtnText_${type}`], 
            fgColor?{color:fgColor}:{}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

