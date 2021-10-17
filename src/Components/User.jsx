import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';

function User() {
    const { id } = useParams();

    const { users } = useContext(Context)

    const user = users[id];
    const { picture:{large}, dob, name:{ first, last, title}, email } = user;
    console.log(user)
    return (
        <div>
            <h2>{ `${title}. ${first} ${last} `}</h2>
            <img src={large} alt={ first} />
            <a href={`mailto:${ email }`}>{ email }</a>
        </div>
    )
}

export default User;
