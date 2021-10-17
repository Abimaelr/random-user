import React, { useContext, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';
import { Container } from 'react-bootstrap';

import './assets/User.css'

import L from 'leaflet';

function User() {
    const { id } = useParams();

    const { users } = useContext(Context)

    const user = users[id];
    const { picture:{large}, dob, name:{ first, last, title}, email, age, nat, registered} = user;
    
    useEffect(()=> {
        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJpbWFlbDc3NyIsImEiOiJja243azB6bXowaG9jMnFwMGl3bWs3czB1In0.dz5yCHAmEjbm9-TGirkJrQ', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
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
