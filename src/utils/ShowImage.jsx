import React from 'react';

const ShowImage = ({ url, alt, newUrl }) => {
    //onError doesnt work when url is empty
    //this helper allow to show own icon in both cases.
    const errHandle = e => e.target.src = newUrl;
    return (
        <img src={url ? url : newUrl} onError={errHandle} alt={alt ? alt : 'Image'} />
    )
}

export default ShowImage;