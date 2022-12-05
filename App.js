import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContent from './src/components/MainContent';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <MainContent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
