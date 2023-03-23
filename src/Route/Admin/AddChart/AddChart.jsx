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
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="artist">Artist</label>
                    <input type="text" name="artist" id="artist" />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        <option value="pop">Pops & Anime</option>
                        <option value="niconico">niconico & Vocaloid</option>
                        <option value="touhou">Touhou Project</option>
                        <option value="game">Game & Variety</option> 
                        <option value="original">Original & Joypolis</option>
                        <option value="utage">Utage</option>
                    </select>
                </div>
                <div>
                    <p>Difficulty: </p>
                    <label htmlFor="easy">Easy</label>
                    <input type="string" name="easy" id="easy" />
                    <label htmlFor="basic">Basic</label>
                    <input type="string" name="basic" id="basic" />
                    <label htmlFor="advance">Advance</label>
                    <input type="string" name="advance" id="advance" />
                    <label htmlFor="expert">Expert</label>
                    <input type="string" name="expert" id="expert" />
                    <label htmlFor="master">Master</label>
                    <input type="string" name="master" id="master" />
                    <label htmlFor="remaster">Remaster</label>
                    <input type="string" name="remaster" id="remaster" />
                </div>
                <div>
                    <label htmlFor="image">Image Cover</label>
                    <input type="string" name="image" id="image" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddChart;