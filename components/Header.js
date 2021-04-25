import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = props => {
  const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    accountName: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700',
      flexGrow: 1,
    },
    icon: {
      width: 20,
      height: 20,
      flexGrow: 0,
      marginLeft: 20,
    },
    chev: {
      width: 12,
      height: 6,
      flexGrow: 0,
      marginTop: 9,
      marginLeft: 3,
    },
  });

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <Text style={styles.accountName}>allthecode</Text>
        <Image style={styles.chev} source={require('../images/downChev.png')} />
      </View>
      <View style={styles.flexContainer}>
        <View>
          <Image
            style={styles.icon}
            source={require('../images/newPost.png')}
          />
        </View>
        <View>
          <Image
            style={styles.icon}
            source={require('../images/moreIcon.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
