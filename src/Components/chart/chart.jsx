import './chart.css'

const Chart = ({ data }) => {
    return (
        <div className="chart">
            <div className='song'>
                <img className='chartImg' src={data.imageCover} alt={data.name} width="80%"/>
                <div className='difficulty'>
                    {data.difficulty.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li className='difficulty-level easy'>{item.Easy}</li>
                                <li className='difficulty-level basic'>{item.Basic}</li>
                                <li className='difficulty-level advance'>{item.Advance}</li>
                                <li className='difficulty-level expert'>{item.Expert}</li>
                                <li className='difficulty-level master'>{item.Master}</li>
                                {item.Remaster ? <li className='difficulty-level remaster'>{item.Remaster}</li> : null}
                            </ul> 
                        )
                    })}
                </div>
            </div>
            <div className='songInfo'>
                <div>{data.name}</div> 
                <div>{data.artist}</div>
            </div>        
        </div>
    )
}

export default Chart;