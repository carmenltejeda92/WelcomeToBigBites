import React, { useState } from 'react';

const Homepage = () => {
    const [searchAuthor, setSearchAuthor] = useState('');
    const [data, setData] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault(); 

           fetch(`http://openlibrary.org/search/authors.json?q=${searchAuthor}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result.docs);
                console.log(result.docs);
            })
            .catch((error) => console.error('Sorry, problem getting data', error));
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchAuthor}
                    onChange={(e) => setSearchAuthor(e.target.value)}
                    placeholder="Author Name"
                />
                <button type="submit">Search</button>
            </form>
            
            {data.map((result) => (
                <div key={result.key}>
                    <div>Author Name: {result.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Homepage;