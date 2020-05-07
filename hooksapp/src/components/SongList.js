import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song1', id: 1 },
        { title: 'Song2', id: 2 },
        { title: 'Song3', id: 3 }
    ]);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
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
            <NewSongForm addSong={addSong}/>
        </div>
    );
}
 
export default SongList;