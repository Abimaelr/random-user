import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../Context/Context';

function User() {
    const { id } = useParams();

    const { users } = useContext(Context)
    return (
        <div>
            { users[id].nat }
        </div>
    )
}

export default User;
