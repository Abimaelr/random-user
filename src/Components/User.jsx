import React, { useContext, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';
import { Container, Row, Col } from 'react-bootstrap';

import './assets/User.css'

import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

function User() {
    const { id } = useParams();

    const { users } = useContext(Context)

    let user = users[id];

    if (!user)
        user = JSON.parse(localStorage.getItem('user'))
    else
        localStorage.setItem('user', JSON.stringify(user));

    const { picture:{large}, dob, name:{ first, last }, email, nat, cell,registered, gender,location} = user;
console.log(user)
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
        // findAddress()
    })

    return (
        <div id="user">
            <Container>
                <Row >
                    <Col xl={6} sm={12}>
                        <div className="basicInfo">
                            <h3>Oi! Me chamo { `${first} ${last}` }</h3>
                            <img src={large} alt={ `${first} ${last}` } />
                            <p>{` ${gender}, ${ dob.age}`}</p>
                        </div>
                    </Col>
                    <Col xl={6} sm={12}>
                        <div className="mainInfo">
                            <div className="info">
                                <i class="las la-envelope"></i>
                                <a href={`mailto:${ email }`}>{ email }</a>
                            </div>
                            <div className="info">
                                <i class="las la-phone"></i>
                               <a href={`tel: ${cell}`}>{ cell }</a>
                            </div>
                            <div className="info">
                                <i class="las la-map-marker-alt"></i>
                                <p>{`${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                

            </Container>
            <div id="mapid"></div>
        </div>
    )
}

export default User;
