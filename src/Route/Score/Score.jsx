import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Score.css';

function Score() {
  const { chartId } = useParams(); 


  return (
    <div className="App">
      {chartId}
    </div>
  );
}

export default Score;
