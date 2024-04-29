import { Text, StyleSheet } from 'react-native';

function AllExpenses() {
  return <Text style = {styles.textLayout}>AllExpenses Screen</Text>;
}

export default AllExpenses;

const styles = StyleSheet.create({
  textLayout: {
    fontWeight: 'bold',
    fontSize: 32,
  }
})