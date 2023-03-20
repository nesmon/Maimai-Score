import './App.css';
import charts from './charts.json';
import Chart from './Components/chart/chart';

function App() {
  return (
    <div className="App">
      <div className="songList">
        {charts.map((item, index) => {
          return (
            <Chart key={index} data={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
