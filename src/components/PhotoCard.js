import React, { useState } from 'react'
import Detail from './Detail'

export default function PhotoCard(props) {
    const { data } = props;

    const [ currentDetail, setCurrentDetail] = useState(null)

    const openDetail = () => {
        setCurrentDetail(true)
    }
    const closeDetail = () => {
        setCurrentDetail(null)
    }

    // console.log(props)
    return(
        <div className="photo-card">
            <h2>{data.title}</h2>
            <img src={data.url} alt="NASA photo of the day" />
            <div className="view-details-button">
                <button onClick={openDetail}>View Info</button>
            </div>
            {currentDetail && <Detail details={data} closeDetail={closeDetail}/>}
        </div>
    )
}
