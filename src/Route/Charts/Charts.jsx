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

  const switchCategory = async (category) => {
    const db = getFirestore();
    const chartRef = collection(db, "Chart");
    const snapshot = await getDocs(chartRef);
    const charts = snapshot.docs.map(doc => doc.data());

    if (category === "all") {
      setCharts(charts);
    } else {
      const filteredCharts = charts.filter(chart => chart.category === category);
      setCharts(filteredCharts);
    }
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
      <div className="flex justify-center flex-wrap">
        <button onClick={() => switchCategory("all")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">All</button>
        <button onClick={() => switchCategory("pop")} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-2">Pop & Anime</button>
        <button onClick={() => switchCategory("niconico")} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2">Niconico & Vocaloid</button>
        <button onClick={() => switchCategory("touhou")} className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded m-2">Touhou Project</button>
        <button onClick={() => switchCategory("game")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">Game & variety</button>
        <button onClick={() => switchCategory("original")} className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded m-2">Original & Joypolis</button>
        <button onClick={() => switchCategory("utage")} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-2">Utage</button>
      </div>

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
