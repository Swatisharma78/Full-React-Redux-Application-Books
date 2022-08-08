import React, { useEffect } from "react";
import BookLists from "../Components/BookLists";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import FilterSort from "../Components/FilterSort";
import { getBooks } from "../Redux/action";

const Books = () => {
  const dispatch =useDispatch();
  const books = useSelector(state => state.books)
 useEffect(() => {
    if (books.length === 0){
    dispatch (getBooks()) 
  } }, []);
    console.log(books)
 return(
<div>
  <h2>Books</h2>
  <BookPageWrapper>
  <FilterShortWrapper>
  <FilterSort/>
  </FilterShortWrapper>
  <BookListwrapper>
  <BookLists books={books} />
  </BookListwrapper>
  </BookPageWrapper>
</div>
 ); 
};
export default Books;
const BookPageWrapper = styled.div `
  display:flex;
`;
  const FilterShortWrapper = styled.div `
  width:300px;
  border: 1px solid red;
  `;
const BookListwrapper = styled.div`
  border: px solid black;
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 18px;
  justify-content:center;
  padding:initial;
  `;
