import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/index';
import Detail from './Detail'

export default function PhotoCard(props) {
    const { data } = props;
    // console.log(props)
    return(
        <div className="photo-card">
            <h2>{data.title}</h2>
            <img src={data.url} alt="NASA photo of the day" />
            <button>View Info</button>
            <Detail details={data} />
        </div>
    )
}
