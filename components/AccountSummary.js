import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AccountSummary = props => {
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
    profileImage: {
      borderRadius: 50,
      height: 80,
      width: 80,
      marginTop: 4,
      marginLeft: 4,
    },
    imageContainer: {
      borderWidth: 1.5,
      borderColor: '#777',
      borderStyle: 'solid',
      height: 91.5,
      width: 91.5,
      borderRadius: 50,
    },
    flexContainerHori: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statContainer: {
      flexDirection: 'column',
    },
    statNumber: {
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '500',
    },
    statName: {
      color: 'white',
      textAlign: 'center',
      fontSize: 11,
    },
    summaryHeading: {
      marginTop: 10,
      color: 'white',
      fontSize: 10,
      fontWeight: '700',
    },
    summary: {
      color: 'white',
      fontSize: 10,
      lineHeight: 16,
    },
    blue: {
      color: '#D2E2EF',
    },
  });

  return (
    <View>
      <View style={styles.flexContainerHori}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../images/profilemain.png')}
          />
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>126</Text>
          <Text style={styles.statName}>Posts</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>1,120</Text>
          <Text style={styles.statName}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>238</Text>
          <Text style={styles.statName}>Following</Text>
        </View>
      </View>
      <View>
        <Text style={styles.summaryHeading}>All The Code</Text>
        <Text style={styles.summary}>
          🧰 Full stack dev (current){'\n'}👨‍💻 CTO (8 years previous){'\n'}⚡
          Electronics PhD (initial)
        </Text>
        <Text style={styles.summary}>
          Posts on <Text style={styles.blue}>#coding</Text>{' '}
          <Text style={styles.blue}>#startups</Text> and getting stuff done
        </Text>
        <Text style={{...styles.summary, ...styles.blue}}>
          simonbarker.me/linktree
        </Text>
      </View>
    </View>
  );
};

export default AccountSummary;
