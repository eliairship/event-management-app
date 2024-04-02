import { useParams } from 'react-router-dom';

const NestedDetail = () => {
  const { testId } = useParams();
  return <div>NestedDetail - {testId}</div>;
};

export default NestedDetail;
