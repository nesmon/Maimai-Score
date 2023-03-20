import { Link } from 'react-router-dom';
import './App.css';
import charts from './charts.json';
import Chart from './Components/chart/chart';

function App() {
  return (
    <div className="App">
      <div className="songList">
        {charts.map((item, index) => {
          return (
            <Link to={`/ls/${item.name}`} key={index}>
              <Chart key={index} data={item} />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default App;
