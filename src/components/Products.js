import React, {useState, useEffect } from "react";
import '../index.css';
import ProductCard from './ProductCard';
import Filter from './Filter';
import Search from './Search';
import Analysis from './Analysis';
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [click, setClick] = useState(false)
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("");


  function fetchProducts() {
    axios.get(url)
      .then(response => {(
        setData(response.data),
        console.log(response)
        )})
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchProducts()
  }, [url])

  const handleClick = (event) => {
    event.preventDefault()
    setClick(!click)
    if (click) {
      document.querySelector(".drop-cont").classList.remove("hidden")
    } else {
      document.querySelector(".drop-cont").classList.add("hidden")
    }
  }
  const filterClick = (event) =>{
    event.preventDefault()
    setCat(event.target.innerHTML)
    console.log(event.target.innerHTML)
  }

  const clickHandler = (event) => {
    event.preventDefault()
    setOpen(!open)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const search = data.filter(item => {
    const newTitle = title.charAt(0).toUpperCase().concat(title.slice(1))    
    return (
      item.title.startsWith(newTitle.trim()) && item.category.startsWith(cat.toLowerCase().trim())
       //console.log(item.category)
    )
  })
  //console.log(search)
  return (
    <div>
      <div class="bg-yellow-500 p-8">
        <h3 class="font-extrabold text-center text-gray-900 text-4xl">Poducts</h3>
      </div>
      <div class="px-8 lg:flex lg:flex-row">
        <Search handleChange={handleChange} title={title} />
        <Filter handleClick={handleClick} filterClick={filterClick} />
      </div>
      <div class={open ? "modal" : "modal-open"}>
        <Analysis data={data}/>
      </div>
      {data.length ? search.map(item => {
        return (
          <>
            <ProductCard data={item} key={item.id} /> 
          </>
          )
      }) :
        <h1>LOADING...</h1>
      }
      <button onClick={clickHandler} className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Analysis</button>
    </div>

  )
}

export default Products
