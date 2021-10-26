import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import {v4 as uuid4} from 'uuid'

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            title, author,
            id: uuid4()
        }
        // addBook(book);
        dispatch({type: "ADD_BOOK", book })
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="add new book" />
        </form>
    )
}

export default NewBookForm
