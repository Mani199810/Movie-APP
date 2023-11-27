
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { getMovies } from '@/utils/requests';
import Card from '@/app/components/Card';

// import { useState } from 'react';

export default async function Page({searchParams}) {
  // const [isLoading, setLoading] = useState(true)
const totalPage=100;
const perPage=8;
const totalpage = Math.ceil(totalPage/perPage);
let currentPage=1;
if (searchParams.page >=1){
currentPage=Number(searchParams.page) 
}
let offest = (currentPage-1)*perPage

let pageNumber=[]
for (let i=currentPage-1;i<=currentPage+3;i++){
  if(i<1)continue
  if(i> totalPage)break
  pageNumber.push(i);

}

const searchText = searchParams.query;
const movies = await getMovies(searchText);


  // if (isLoading) return <p>Loading...</p>
  // if (!movies) return <p>No profile data</p>
  return (
    <div className='container my-3'>
      <h1>Top Trending Movies</h1>
      <div className='d-flex flex-wrap gap-3'>
        {movies.map((movie,key) => {
          return <Card  key={key} movie={movie}></Card>
        })}
      </div>
     
    </div>
  )
}
