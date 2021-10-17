import React, { useContext, useEffect, useState} from 'react';

import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';
import { Container } from 'react-bootstrap';

import './assets/User.css'

import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

function User() {
    // const [latLon, setLatLon] = useState([0,0]);
    const { id } = useParams();

    const { users } = useContext(Context)

    let user = users[id];

    if (!user)
        user = JSON.parse(localStorage.getItem('user'))
    else
        localStorage.setItem('user', JSON.stringify(user));

    const { picture:{large}, dob, name:{ first, last, title}, email, age, nat, registered, location} = user;

    const findAddress = async () => {
        const provider = new OpenStreetMapProvider();

        const result = await provider.search({ query: ` ${location.city} - ${location.state} - ${location.country}`})
        const latLon = ([result[0].raw.lat,result[0].raw.lon] )

        var mymap = L.map('mapid').setView(latLon, 10);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJpbWFlbDc3NyIsImEiOiJja243azB6bXowaG9jMnFwMGl3bWs3czB1In0.dz5yCHAmEjbm9-TGirkJrQ', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
        L.marker(latLon).addTo(mymap)

    }
    
    useEffect(()=> {
        findAddress()
    })

    return (
        <div>
            <Container>
                <img src={large} alt="" />

            </Container>
            <div id="mapid"></div>
        </div>
    )
}

export default User;
