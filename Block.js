import React from 'react'

const Block = (props) => {
  return (
    <>
      <div className='profileBox flex'>
          <img src={props.image} alt="profile pic" height={60} width={60}/>
          <a href={props.url}>{props.id}</a>
      </div>
    </>
  )
}

export default Block
