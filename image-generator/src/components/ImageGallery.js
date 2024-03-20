import React, { useState } from 'react';

function ImageGallery() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    function displayImages() {
        const query = document.getElementById("search").value;
        let clientId = "wWaFl3HQp23U-57wQbpyyAU45vNU7IURh-9Zy8csxfQ";
        const API_URL = "https://api.unsplash.com/search/photos";
        let url = `${API_URL}?client_id=${clientId}&query=${query}&page=${page}&per_page=12`;

        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                setImages(data.results);
                setPage(page + 1);
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    function loadMore() {
        displayImages();
    }

    return (
        <div>
            <input type="text" id="search" placeholder="Search..." />
            <button onClick={displayImages}>Search</button>
            <div id="images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.urls.regular}
                        alt={`Image ${index}`}
                        className="imgEle"
                        height="100"
                        onClick={() => {
                            // Handle image click event
                        }}
                    />
                ))}
            </div>
            <button className="loadBtn" onClick={loadMore}>Load More</button>
        </div>
    );
}

export default ImageGallery;
