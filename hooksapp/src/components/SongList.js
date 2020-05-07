import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song1', id: 1 },
        { title: 'Song2', id: 2 },
        { title: 'Song3', id: 3 }
    ]);
    const addSong = () => {
        setSongs([...songs, { title: 'Song4', id: uuid() }])
    }

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(song => {
                        return (
                            <li key={song.id}>{song.title}</li>
                        )
                    })
                }
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
    );
}
 
export default SongList;