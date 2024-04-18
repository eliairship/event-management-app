import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ExampleContext } from '../context/ExampleContext';
import ChildNestedComponent from '../components/ChildNestedComponent';
import { CounterContext } from '../context/CounterContext';

const NestedDetail = () => {
  const { testId } = useParams();
  const context = useContext(ExampleContext);
  const counterContext = useContext(CounterContext);
  return (
    <div>
      NestedDetail - {testId}
      <h1>{counterContext.count}</h1>
      <button onClick={() => context.setNewMessage('Random new value')}>
        Set New Message
      </button>
      <ChildNestedComponent />
    </div>
  );
};

export default NestedDetail;
