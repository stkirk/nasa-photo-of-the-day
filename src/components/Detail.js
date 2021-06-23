import React from 'react';

export default function Detail(props) {
    const { details, currentDetail, closeDetail } = props;
    // console.log('detail props', details)
    return(
        <div className="details-container">
            <h4>{details.date}</h4>
            <p>{details.explanation}</p>
            {details.copyright && <p>Copyright: {details.copyright}</p>}
            <button onClick={closeDetail} >Close</button>
        </div>
    )
}