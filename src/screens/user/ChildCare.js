/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ServiceType from '../../components/ServiceType';
import SliderItem from '../../components/SliderItem';
import Quality from '../../components/Quality';
import Icon from 'react-native-vector-icons/kindicare';
// import DropDownItem from '../../components/DropDownItem';
import DropDownPicker from 'react-native-dropdown-picker';
const ChildCare = () => {
  // onFindChildcare= () =>{

  // }
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.headerTitle}>Children Information</Text>
        <View>
          <Text>
            You can choose which children want to apply by clicking on their name and editing the
            information by clicking on the pen icon
          </Text>
        </View>
      </View>
      <View style={styles.childView}>
        <View style={styles.childHeader}>
          <Text style={styles.headerChildText}>Wesley Perry</Text>
          <Icon name="ic-boy" color="#32A4FC" size={15} style={{ marginLeft: 10 }} />
          <View
            style={{
              borderColor: '#DB147F',
              borderWidth: 1,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 20,
              marginStart: 100,
            }}
          >
            <Icon name="ic-pen" color="#DB147F" size={23} style={{ padding: 4 }} />
          </View>
        </View>
        <Text>04-04-2018</Text>
        <View>
          <Text>Allergies: No</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerChildText: {
    fontSize: 20,
  },
  childHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  childView: {
    borderColor: '#DB147F',
    marginTop: 20,
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  container: {
    marginLeft: 20,
    marginEnd: 20,
  },
});
export default ChildCare;
