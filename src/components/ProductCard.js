import React, { Component } from 'react'

function ProductCard({ data }) {
  return (
    <div class="px-8 py-6">
      <div class="w-full rounded-xl">
        <p class="bg-yellow-500 w-32 p-1 rounded-l-2xl capitalize text-center">{data.category}</p>
        <img src={data.image} class="w-40 m-auto" />
      </div>
      <div class="rounded-xl shadow-lg p-4">
        <p class="text-lg text-center font-bold">{data.title}</p>
        <p class="text-lg text-center font-bold">{"$" + data.price}</p>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default ProductCard
