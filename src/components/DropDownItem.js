/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownItem = (props) => {
  return (
    <DropDownPicker
      items={props.item}
      defaultIndex={0}
      containerStyle={{ height: 40, top: 40 }}
      onChangeItem={(item) => console.log(item.label, item.value)}
      style={styles.dropStyle}
    />
  );
};
const styles = StyleSheet.create({
  dropStyle: {
    borderColor: '#DB147F',
    borderWidth: 2,
    borderRadius: 3,
    color: '#DB147F',
    left: 23,
    top: 30,
    width: 360,
  },
});
export default DropDownItem;
