import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song1', id: 1 },
        { title: 'Song2', id: 2 },
        { title: 'Song3', id: 3 }
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    useEffect(() => {
        console.log("Change only when songs list is modified!");
    }, [songs]);
    useEffect(() => {
        console.log("Change only when age is modified!");        
    }, [age]);

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
            <button onClick={() => setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
    );
}
 
export default SongList;