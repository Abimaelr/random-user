import React, { useState } from 'react';
import Context from './Context';

function Provider({children}) {
    const [users, setUsers] = useState([])

    const values = {
        users,
        setUsers
    }
    return (
        <Context.Provider value={values}>
           {children}
        </Context.Provider>
    )
}

export default Provider
