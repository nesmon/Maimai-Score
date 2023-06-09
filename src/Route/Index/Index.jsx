import './Index.css';
import Yuki from './../../assets/yuki.png';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';  

function Index() {
  
  const [charts, setCharts] = useState([]);
  const [scores, setScores] = useState([]);

  const getCharts = async () => {
    const db = getFirestore();
    const chartRef = collection(db, "Chart");
    const snapshot = await getDocs(chartRef);
    const charts = snapshot.docs.map(doc => doc.data());

    return charts;
  }

  const getScores = async () => {
    const db = getFirestore();
    const scoreRef = collection(db, "Score");
    const snapshot = await getDocs(scoreRef);
    const scores = snapshot.docs.map(doc => doc.data());

    return scores;
  }


  useEffect(() => {
    async function fetchData() {
      const charts = await getCharts();
      setCharts(charts);

      const scores = await getScores();
      setScores(scores);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="sm:w-6/12 h-80 bg-gray-200 rounded-lg border-2 border-indigo-800 m-2 flex flex-row justify-around">
          <img src={Yuki} alt="Yuki" className="hidden sm:block" />
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="flex">
                <span className="font-bold text-sm m-2">
                  <span className="text-indigo-500 text-xl">{charts.length}</span> Charts
                </span>
                <span className="font-bold text-sm m-2">
                  <span className="text-indigo-500 text-xl">{scores.length}</span> Score
                </span>
              </div>
              <div className="mx-3">
                <p className="text-md">
                  Welcome to MaiScore, a website that allows you to view your score from Maimai.
                  You will be able to submit your score for each chart and see other score from other players.
                </p>
              </div>
              <div>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-2">
                  <a href="/charts">Charts</a>
                </button>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2">
                  <a href="/how-to">How to submit</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
  );
}

export default Index;
