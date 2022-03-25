import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState([]);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=')
            .then(res => res.json())
            .then(data => setPlayers(data.player))
    }, [])
    const playerDetail = (player) => {
        console.log(player);
        const newDetail = [...detail, player];
        setDetail(newDetail);
    }
    return (
        <div className='main-players-container'>
            <div className='players-container'>

                {
                    players.map(player => <Player player={player} key={player.idPlayer} playerDetail={playerDetail}></Player>)
                }
            </div>
            <div className='players-detail-container'>
                <Detail detail={detail}></Detail>
            </div>
        </div>
    );
};

export default Players;