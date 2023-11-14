import { connect } from 'react-redux';
import { increment, decrement } from '../context/actions/counterActions';
import { View, Text, Button } from 'react-native';

const Counter = ({ count, increment, decrement }) => {
  return (
    <View style={{marginTop:130}}>
      <Text>{count} </Text>
      <Button title="increase" onPress={increment} />
      <Button title="decrease" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = (state) => ({ count: state.counter.count });

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
