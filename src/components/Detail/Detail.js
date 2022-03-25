import React from 'react';
import './Detail.css'
const Detail = (props) => {
    console.log(props.detail)

    const { detail } = props;
    detail.map(detail => console.log(detail.idPlayer))
    return (
        <div className='detail-container'>
            <h1>
                Details of The Player
            </h1>
            <p>Select item:{detail.length}</p>
            <p></p>

        </div>
    );
};

export default Detail;