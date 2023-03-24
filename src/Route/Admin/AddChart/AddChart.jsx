import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './AddChart.css';

function AddChart() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        let id = `${formData.get('title').slice(0, 3).toLowerCase()}` + 
        `${formData.get('title').length}` + 
        `${formData.get('artist').length}` + 
        `${formData.get('artist').slice(0, 3).toLowerCase()}` + 
        `${formData.get('category').length}`;

        const formatedData = {
            "id": id,
            "title": formData.get('title'),
            "artist": formData.get('artist'),
            "category": formData.get('category'),
            "difficulty": [
                {
                    "Easy": formData.get('easy'),
                    "Basic": formData.get('basic'),
                    "Advance": formData.get('advance'),
                    "Expert": formData.get('expert'),
                    "Master": formData.get('master'),
                    "Remaster": formData.get('remaster'),
                }
            ],
            "imageCover": formData.get('image'),
        }

        const db = getFirestore();
        addDoc(collection(db, "Chart"), formatedData).then(() => {
            console.log("Document successfully written!");
            window.location.href = "/charts";
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    return (
        <div className="addChart">
            <h1>Add Chart</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className='w-1/3 text-lg uppercase tracking-wide text-green-500 font-semibold'>Title</label>
                    <input className="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="title" id="title" type="text"></input>
                </div>
                <div>
                    <label htmlFor="artist" className=' text-lg uppercase tracking-wide text-green-500 font-semibold' >Artist</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="artist" id="artist" type="text"></input>
                </div>
                <div>
                    <label htmlFor="category" className='text-2xl'>Category</label>
                    <select className="block appearance-none w-64 bg-white border border-gray-400 hover:border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="category" id="category">
                        <option value="pop">Pops & Anime</option>
                        <option value="niconico">niconico & Vocaloid</option>
                        <option value="touhou">Touhou Project</option>
                        <option value="game">Game & Variety</option> 
                        <option value="original">Original & Joypolis</option>
                        <option value="utage">Utage</option>
                    </select>
                </div>
                <div>
                    <div className='text-2xl w-6'>
                        <p>Difficulty: </p>
                    </div>
                    <div className='flex flex-row flex-wrap'>
                        <div className='w-2/6'>
                            <label htmlFor="easy" className='flex text-lg uppercase tracking-wide text-blue-500 font-semibold'>Easy</label>
                            <input type="string" name="easy" id="easy" className="w-3/6 bg-blue-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                        </div>

                        <div className='w-2/6'>
                            <label htmlFor="basic" className='flex text-lg uppercase tracking-wide text-green-500 font-semibold'>Basic</label>
                            <input type="string" name="basic" id="basic" className="w-3/6 bg-green-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"/>
                        </div>
                        
                        <div className='w-2/6'>
                            <label htmlFor="advance" className='flex text-lg uppercase tracking-wide text-yellow-500 font-semibold'>Advance</label>
                            <input type="string" name="advance" id="advance" className="w-3/6 bg-yellow-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" />
                        </div>

                        <div className='w-2/6'>
                            <label htmlFor="expert" className='flex text-lg uppercase tracking-wide text-red-500 font-semibold'>Expert</label>
                            <input type="string" name="expert" id="expert" className="w-3/6 bg-red-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"/>
                        </div>

                        <div className='w-2/6'>
                            <label htmlFor="master" className='flex text-lg uppercase tracking-wide text-fuchsia-500 font-semibold'>Master</label>
                            <input type="string" name="master" id="master" className="w-3/6 bg-fuchsia-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-fuchsia-500"/>
                        </div>

                        <div className='w-2/6'>
                            <label htmlFor="remaster" className='flex text-lg uppercase tracking-wide text-indigo-500 font-semibold'>Remaster</label>
                            <input type="string" name="remaster" id="remaster" className="w-3/6 bg-gray-300 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="image"className='text-2xl w1/6'>Image Cover</label>
                    <input type="string" name="image" id="image" className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                </div>
                <div>
                    <button className="w-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddChart;