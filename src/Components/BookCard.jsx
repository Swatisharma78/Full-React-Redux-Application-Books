import React from 'react'
const BookCard=({bookData}) =>{
return  <div>
<div>
<img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
width="100%"
alt="cover-page" />
<div>{bookData.book_name}</div>
<div>{bookData.release_year}</div>
<div>{bookData.category}</div>
</div>
</div>;
};
export default BookCard;
