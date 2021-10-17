import React, { useContext } from 'react';

import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';
import { Container } from 'react-bootstrap';

function User() {
    const { id } = useParams();

    const { users } = useContext(Context)

    const user = users[id];
    const { picture:{large}, dob, name:{ first, last, title}, email, age, nat, registered} = user;
    console.log(user)

    return (
        <div>
            <Container>
                <img src={large} alt="" />
                
            </Container>
        </div>
    )
}

export default User;
