import { useParams } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import './ChartAddScore.css';

function AddScore() {
  const { chartId } = useParams(); 

  async function handleForm(e) {
    e.preventDefault();

    const date = new Date();
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      chartId: chartId,
      difficulty: formData.get('difficulty'),
      rank: formData.get('rank'),
      pseudo: formData.get('pseudo'),
      score: formData.get('score'),
      accuracy: formData.get('accuracy'),
      date: date,
    }

    const db = getFirestore();
    const scoreRef = collection(db, "Score");
    addDoc(scoreRef, data).then(() => {
      console.log("Document successfully written!");
      window.location.href = `/charts/${chartId}/score`;
    }).catch((error) => {
      console.error("Error writing document: ", error);
    });
  }
  

  return (
    <div className="App">
      <div className="flex justify-center m-5">
        <div className="bg-white px-4 py-5 sm:p-6 overflow-hidden shadow sm:rounded-md">
          <form onSubmit={handleForm}>
            <div className="m-2">
              <label htmlFor="pseudo" className="block text-sm font-medium leading-6 text-gray-900">
                Pseudo
              </label>
              <input
                type="string"
                name="pseudo"
                id="pseudo"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <hr />

            <div className="flex justify-center">
              <div className="m-2">
                <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-gray-900">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Easy">Easy</option>
                  <option value="Basic">Basic</option>
                  <option value="Advance">Advance</option>
                  <option value="Expert">Expert</option>
                  <option value="Master">Master</option>
                  <option value="Re:Master">Re:Master</option>
                </select>
              </div>
              <div className="m-2">
                <label htmlFor="rank" className="block text-sm font-medium leading-6 text-gray-900">
                  Rank
                </label>
                <select
                  id="rank"
                  name="rank"
                  className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="A">A</option>
                  <option value="AA">AA</option>
                  <option value="AAA">AAA</option>
                  <option value="S">S</option>
                  <option value="S+">S+</option>
                  <option value="SS">SS</option>
                  <option value="SS+">SS+</option>
                  <option value="SSS">SSS</option>
                  <option value="Perfect">Perfect</option>
                </select>
              </div>
            </div>

            <hr />
            
            <div className="m-2">
              <label htmlFor="score" className="block text-sm font-medium leading-6 text-gray-900">
                Score
              </label>
              <input
                type="integer"
                name="score"
                id="score"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="m-2">
              <label htmlFor="accuracy" className="block text-sm font-medium leading-6 text-gray-900">
                Accuracy
              </label>
              <input
                type="integer"
                name="accuracy"
                id="accuracy"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <button type="submit" className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Add Score
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddScore;
