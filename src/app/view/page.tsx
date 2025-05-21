"use client"
import { Post } from "../../../types/PostType";
import { useEffect, useState } from 'react';
import PostCard from "../../../components/cards/PostCard";

export default function Page({ }) {

  const [data, setData] = useState<Post[]>([]);

  // fetch posts
  useEffect(() => {
    fetch('entries.json')
      .then((res) => res.json())
      .then((json) => setData(json))
  })

  // if data is null 
  if (!data) {
    return (<p>Loading</p>);
  }

  return (
    <>
      <h1>View page</h1>
      <hr />
      <br />

      <div className="border-2 m-5 p-2 flex flex-wrap gap-4">
        {data.map((entries: Post, index) => {
          return <PostCard entry={entries} key={index} />
        })}
      </div>
    </>
  );

}
