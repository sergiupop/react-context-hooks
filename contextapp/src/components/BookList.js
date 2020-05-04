import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className='book-list'>
                <ul>
                    <li>Book1</li>
                    <li>Book2</li>
                    <li>Book3</li>
                </ul>
            </div>
        )
    }
}

export default BookList;