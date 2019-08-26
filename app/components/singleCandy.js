import React from 'react'

const SingleCandy = (props) => {
    return (
        <div>
            <h1>{props.candy.name}</h1>
            <h1>{props.candy.description}</h1>
            <img src={props.candy.imageUrl} />
        </div>
    )
}

export default SingleCandy
