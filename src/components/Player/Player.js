import React from 'react';
import './Player.css'
const Player = (props) => {
    // console.log(props.player);
    // console.log(props.player)
    // console.log(props.playerDetail)
    const { strThumb, strDescriptionEN, strNationality } = props.player;
    const { playerDetail } = props;

    return (
        <div className='player-container'>
            <div className='player-img'>
                <img src={strThumb ? strThumb : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"} alt="" />
            </div>
            <div className='name-des'>
                <p>Name & description:{strDescriptionEN ? strDescriptionEN.slice(0, 100) : "no found"}</p>

                <p>Nationality:{strNationality}</p>
            </div>
            <div className='button-style'>
                <button onClick={() => playerDetail(props.player)}>Player Details</button>
            </div>
        </div>
    );
};

export default Player;