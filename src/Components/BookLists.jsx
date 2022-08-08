import React from 'react'
import styled from "styled-components"
import BookCard from './BookCard';
const BookLists=({books})=>{
return (
 <>
{books.length>0&& 
books.map((singleBook)=>{
    return <BookCardWrapper key={singleBook.id}>
    <BookCard bookData={singleBook}/></BookCardWrapper>
    })} </>
  );
};
export default BookLists;
const BookCardWrapper= styled.div`
border: 1px solid blue;
padding:5px;
width:310px;
`;
