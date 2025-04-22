import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <>
    {post.length? <Feed posts={post}/> :<p style={{textAlign:"center",marginTop:"300px"}}>No Posts to display </p>}
    
    </>
  )
}

export default Home;