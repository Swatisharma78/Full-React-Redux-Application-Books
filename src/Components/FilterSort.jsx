import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
const FilterSort=()=>{

const dispatch=useDispatch()
const [searchParams,setSearchParams]= useSearchParams();
  const urlCategory=searchParams.getAll("category")
  const urlSort =searchParams.get("sortBy")
  const[category, setCategory] =useState(urlCategory||[]);
  const [sortBy, setSortBy]=useState(urlSort||"")
  
const handleCheckbox=(e)=>{
const option=e.target.value;
let newCategory=[...category];
if(category.includes(option)){
newCategory.splice(newCategory.indexOf(option), 1);
}
else{
newCategory.push(option)
}
setCategory(newCategory)
};
const handleSort = (e) => {
setSortBy(e.target.value) 
};
useEffect(() =>{
if(category){
  setSearchParams({category});
dispatch(getBooks({params: {category}}))
  }
},[category,dispatch, setSearchParams]);
useEffect(() => {
if(sortBy){
  const params ={
    category: searchParams.getAll("category"),
    sortBy
  }
 const getBooksParams ={  params:{
      category: searchParams.getAll("category"),
      _sort:"release_year",
      _order:sortBy,
    },
  };
console.log(getBooksParams)
 setSearchParams({params});
dispatch(getBooks(getBooksParams))
}
},[setSearchParams,dispatch,searchParams, sortBy])
console.log(sortBy)
return(
     <div>
    <h3>Filter</h3>
    <div>
      <div><input type="checkbox" onChange={handleCheckbox}value="Novel"defaultChecked={category.includes("Novel")} />
        <label>Novel</label>
      </div>
<div>
<input type="checkbox"  onChange={handleCheckbox} value="Science_Fiction"  defaultChecked={category.includes("Science_Fiction")}/>
        <label>Science_Fiction</label>
      </div>

      <div><input type="checkbox"  onChange={handleCheckbox}  value="Motivational"  defaultChecked={category.includes("Motivational")}/>
        <label>Motivational</label>
      </div>

      <div><input type="checkbox"  onChange={handleCheckbox}  value="Thriller"  defaultChecked={category.includes("Thriller")}/>
        <label>Thriller</label>
      </div>

      <div> <input type="checkbox"  onChange={handleCheckbox}value="Dark_Web" defaultChecked={category.includes("Dark_Web")}/>
        <label>Dark_Web</label>
      </div>
      
    </div>
    <h3>Sort</h3>
    <div onChange={handleSort}>
      <input type="radio"   value="asc"  name="sortBy" defaultChecked={sortBy === "asc"}/>{" "}Assending
      <input type="radio"value="desc"  name="sortBy" defaultChecked={sortBy === "desc"} /> {" "}Descending
    </div>
  </div>

  );
    
};

export default FilterSort;
