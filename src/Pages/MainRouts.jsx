import React from 'react';
import{Route,Routes} from "react-router-dom";
import SingleBook from './SingleBook';
import Admin from './Admin';
import Books from './Books';
import EditBook from './EditBook';

const MainRouts = () => {
  return (
    <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/books/:id" element={<SingleBook/>} />
        <Route path="/books/:id/edit" element={<EditBook/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<h1>Page is not Found</h1>} />
    </Routes>
  );
};

export default MainRouts;
