import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <React.Fragment>
        <h1>Top Picks for the Week</h1>         
        <section className='booklist'>
            {books.map((book,index)=>{
             return <Book {...book} key={book.id} number={index+1}/>
            })}
        </section>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);