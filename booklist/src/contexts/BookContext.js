import React, { createContext, useState } from 'react';
import { v1 as uuid1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Book1", author: "Author1", id: 1 },
        { title: "Book2", author: "Author2", id: 2 }
    ]);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid1() }])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;