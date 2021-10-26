import { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();


const BookContextProvider = (props) => {
    // const [books, setBooks] = useState(
    //     // [
    //     //     {author: "shade", title: "shade book", id: 1},
    //     //     {author: "favour", title: "favour book", id: 2}
    //     // ]
    //     JSON.parse(localStorage.getItem("books"))
    // )

    // const books = [
    //     {author: "shade", title: "shade book", id: 1},
    //     {author: "favour", title: "favour book", id: 2}
    // ]

    // const addBook = (book) => {
    //     setBooks([...books, book])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id) )
    // }

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : []
    })
    // JSON.parse(localStorage.getItem("books"))


    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);
    

    return (
        <BookContext.Provider value={{books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
