import React, {useContext} from 'react'
import Context from '../Context/Context';

function Home() {
    const { users, setUsers } = useContext(Context)
    return (
        <div>
            <h1>{users}</h1>
        </div>
    )
}

export default Home
