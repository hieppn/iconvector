import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
const ServiceType = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <View style={[styleItem.item]}>
          <Icon name={props.name} color={props.color} size={23} />
        </View>
        <Text style={styleItem.text}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styleItem = StyleSheet.create({
  item: {
    borderRadius: 25,
    width: 50,
    height: 50,
    // borderColor: color,
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    width: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 11,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#ABA7A7',
  },
});
export default ServiceType;
