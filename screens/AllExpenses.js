import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { Text } from 'react-native';
import { ExpenseContext } from '../store/expense-context';

function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  return(
    <ExpensesOutput
    expenses={expensesCtx.expenses}
    expensesPeriod="Total"
    fallbackText="No registered expenses found!"
  />
  // <Text>Hi</Text>
  ) 
}

export default AllExpenses;