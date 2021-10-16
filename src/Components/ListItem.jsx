import React from 'react';
import './assets/ListItem.css';

function ListItem(props) {
    const { name, age, nacionality, thumb } = props;
    const { title, first, last} = name;
    return (
        <div className="listItem">
            <img src={ thumb } alt="" />
            <div className="basicInfo">
                <h6>{`${title} ${first} ${last}`}</h6>
                <div>
                    <p>{nacionality}</p>
                    <p>{age}</p>
                </div>
            </div>
        </div>
    )
}

export default ListItem;
