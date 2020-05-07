import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={ev => setTitle(ev.target.value)}/>
            <input type="submit" value="Add song"/>
        </form>
    );
}
 
export default NewSongForm;