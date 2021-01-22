import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Quality = (props) => {
  return (
    <TouchableOpacity style={styles.qualityView}>
      <Text style={styles.qualityText}>{props.quality}</Text>
    </TouchableOpacity>
  );
};

export default Quality;

const styles = StyleSheet.create({
  qualityView: {
    borderRadius: 15,
    borderColor: '#DB147F',
    borderWidth: 1,
    padding: 8,
    margin: 10,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  qualityText: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.002,
    color: '#2D1F21',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
