import React from 'react'

function ListItem(props) {
    const { name, age, nacionality, thumb } = props;
    const { title, first, last} = name;
    return (
        <div>
            <img src={ thumb } alt="" />
            <div>
                <h6>{`${title} ${first} ${last}`}</h6>
                <p>{nacionality}</p>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default ListItem;
