import React from 'react';
import './Detail.css'
const Detail = (props) => {
    console.log(props.detail)

    const { detail } = props;
    console.log(detail);


    return (
        <div className='detail-container'>
            <h1>
                Details of The Player
            </h1>
            <p>Select item:{detail.length}</p>
            {
                detail.map(detail => <li>Barth:{detail.strBirthLocation} Position: {detail.strPosition}</li>)
            }

        </div>
    );
};

export default Detail;