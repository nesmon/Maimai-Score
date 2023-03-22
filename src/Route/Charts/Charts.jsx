import { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import './Charts.css';
import Chart from './../../Components/chart/chart';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

function Charts() {
  const [charts, setCharts] = useState([]);

  const getCharts = async () => {
    const db = getFirestore();
    const chartRef = collection(db, "Chart");
    const snapshot = await getDocs(chartRef);
    const charts = snapshot.docs.map(doc => doc.data());

    return charts;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getCharts();
      setCharts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="songList">
        {charts.map((item, index) => {
          return (
            <Link to={`/charts/${item.id}/score`} key={index}>
              <Chart key={index} data={item} />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Charts;
