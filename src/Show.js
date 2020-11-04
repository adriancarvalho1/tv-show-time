import React from 'react';
import Episodes from './Episodes'

const Show = ({title, image, summary, genre, rating, network, status, id}) => {

    const strippedString = !!summary ? summary.replace(/(<([^>]+)>)/gi, "") : null;

    return(
        <div className="show-card">
            <h2>{title}</h2>
            <img src={image} alt=""/>
            <p>{strippedString}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}</p>
            <p>Network: {network}</p>
            <p>Status: {status}</p>
            <Episodes 
            showId={id}/>
        </div>
    )
}

export default Show;