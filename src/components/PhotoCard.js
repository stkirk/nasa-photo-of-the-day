import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/index';

export default function PhotoCard(props) {

    // console.log(props)
    return(
        <div className="photo-card">
            <h2>{props.data.title}</h2>
            <img src={props.data.url} alt="NASA photo of the day" />
            <button>View Info</button>
        </div>
    )
}
