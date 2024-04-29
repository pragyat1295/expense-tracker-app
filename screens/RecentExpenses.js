import { Text, StyleSheet } from 'react-native';

function RecentExpenses() {
  return <Text style = {styles.textLayout} >RecentExpenses Screen</Text>;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  textLayout: {
    fontWeight: 'bold',
    fontSize: 32,
  }
})