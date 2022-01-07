import React from "react";
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


const Products = (data) => {
    //console.log(typeof data);
      const category = []
    const categories = ()=> {
      for (const [key, value] of Object.entries(data)) {
        console.log(value);
        value.map(item=> {
          category.push(item.category)
          });       
      }
    }
    categories()
    const elect = category.filter((item)=>{
      return item.includes("electronics");
      })
    const womenCloth = category.filter((item)=>{
      return item.startsWith("women's clothing", 0);
      })
    const menCloth = category.filter((item)=>{
      return item.startsWith("men's clothing", 0);
      })
    const jewery = category.filter((item)=>{
      return item.includes("jewelery");
      })
      
      const docs = {
        labels: ['Electronics', 'Jewelery', "Men's clothing", "Women's clothing"],
        datasets: [
          {
            label: 'Categories in Catalouge',
            data: [elect.length,jewery.length, menCloth.length, womenCloth.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
return( 
    <div>
      <Pie data={docs} />
    </div>

  )
}

export default Products
