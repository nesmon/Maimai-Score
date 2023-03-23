import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import './ChartScore.css';

function Score() {
  const { chartId } = useParams(); 

  const [chart, setChart] = useState([]);
  const [scores, setScores] = useState([]);

  const getChart = async () => {
    const db = getFirestore();
    const chartRef = collection(db, "Chart");
    const snapshot = await getDocs(chartRef);
    const chart = snapshot.docs.map(doc => doc.data());
    
    return chart;
  }

  const switchScoreDifficulty = async (difficulty) => {
    const db = getFirestore();
    const scoreRef = collection(db, "Score");
    const snapshot = await getDocs(scoreRef);
    const scores = snapshot.docs.map(doc => doc.data());
    const score = scores.filter(item => item.chartId === chartId && item.difficulty === difficulty);
    score.sort((a, b) => b.score - a.score);

    setScores(score);
  }


  useEffect(() => {
    async function fetchData() {
      const data = await getChart();
      data.forEach(chart => {
        if (chart.id === chartId) {
          setChart(chart);
        }
      });
    }
    fetchData();
  }, []);

  console.log(scores)

  const getCategory = () => {
    switch (chart.category) {
      case "pop":
        return "Pop & Anime";
      case "niconico":
        return "Niconico & Vocaloid";
      case "touhou":
        return "Touhou Project";
      case "game":
        return "Game & Variety";
      case "original":
        return "Original & Joypolis";
      case "utage":
        return "Utage";
    }
  };

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="w-auto h-40 pr-4 bg-gray-200 rounded-lg border-2 border-indigo-800 m-2 flex flex-row">
          <img src={chart.imageCover} alt={chart.title} className="rounded-lg mr-3" />
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-bold text-xl">{chart.title}</p>
              <p className="font-bold text-lg">{chart.artist}</p>
              <hr />
              <p>{chart.category && getCategory()}</p>
              <div className="flex text-center">
                {chart.difficulty && Array.isArray(chart.difficulty) && chart.difficulty.map((item, index) => {
                  return (  
                    <ul key={index} className="flex flex-row justify-center font-bold flex-wrap">
                      <li onClick={() => switchScoreDifficulty("Easy")} className='rounded-lg w-10 m-1 easy'>{item.Easy}</li>
                      <li onClick={() => switchScoreDifficulty("Basic")} className='rounded-lg w-10 m-1 basic'>{item.Basic}</li>
                      <li onClick={() => switchScoreDifficulty("Advance")} className='rounded-lg w-10 m-1 advance'>{item.Advance}</li>
                      <li onClick={() => switchScoreDifficulty("Expert")} className='rounded-lg w-10 m-1 expert'>{item.Expert}</li>
                      <li onClick={() => switchScoreDifficulty("Master")} className='rounded-lg w-10 m-1 master'>{item.Master}</li>
                      {item.Remaster ? <li onClick={() => switchScoreDifficulty("Re:Master")} className='difficulty-level remaster'>{item.Remaster}</li> : null}
                    </ul> 
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-2">
          <Link to={`/charts/${chartId}/score/add`}>
            Add Score
          </Link>
        </button>
      </div>

      <hr  />

      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Pseudo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Score
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Accuracy
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Rank
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {scores && Array.isArray(scores) && scores.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-3.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {item.pseudo}
                        </td>
                        <td className="px-3 py-3.5 text-sm text-gray-900">
                          {item.score}
                        </td>
                        <td className="px-3 py-3.5 text-sm text-gray-900">
                          {item.accuracy}
                        </td>
                        <td className="px-3 py-3.5 text-sm text-gray-900">
                          {item.rank}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Score;
