/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import ManagementButtons from './components/ManagementButtons';
import Highlights from './components/Highlights';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FeedButtons from './components/FeedButtons';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View style={styles.horizontalInset}>
            <Header />
          </View>
          <Banner bannerText={'View professional dashboard'} />
          <View style={styles.horizontalInset}>
            <AccountSummary />
            <ManagementButtons />
            <Highlights />
          </View>
          <FeedButtons />
          <Feed />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
        }}>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  horizontalInset: {
    marginHorizontal: 16,
  },
});

export default App;
