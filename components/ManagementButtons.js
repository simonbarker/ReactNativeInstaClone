import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ManagementButtons = props => {
  const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    bg: {
      backgroundColor: Colors.darker,
    },
    whiteText: {
      color: 'white',
    },
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      borderColor: '#555',
      padding: 8,
      width: '32.5%',
    },
    buttonText: {
      fontSize: 10,
      fontWeight: '700',
      textAlign: 'center',
    },
    flexContainerHori: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={styles.flexContainerHori}>
      <View style={styles.button}>
        <Text style={{...styles.whiteText, ...styles.buttonText}}>
          Edit Profile
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={{...styles.whiteText, ...styles.buttonText}}>
          Promotions
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={{...styles.whiteText, ...styles.buttonText}}>
          Insights
        </Text>
      </View>
    </View>
  );
};

export default ManagementButtons;
