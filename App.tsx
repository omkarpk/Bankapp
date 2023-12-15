import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Registration from './src/components/Registration';

function App(): React.JSX.Element {
  return (
   <SafeAreaView>
    <Registration/>
    <StatusBar />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
