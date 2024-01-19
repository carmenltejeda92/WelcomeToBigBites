import React, { useState } from 'react';

const Homepage = () => {
    const [searchAuthor, setSearchAuthor] = useState('');
    const [data, setData] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault(); 

           fetch(`http://openlibrary.org/search/authors.json?q=${searchAuthor}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result.docs);
                console.log(result.docs);
            })
            .catch((error) => console.error(`Sorry, can't get data`, error));
    };

    const handleSelectAuthor = (authorKey) => {
        fetch(`http://openlibrary.org/authors/${authorKey}.json`)
            .then((response) => response.json())
            .then((result) => {
                setSelectedAuthor(result);
                console.log(result);
            })
            .catch((error) => console.error(`Can't get author details:`, error));
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
            
            <div >
                {data.map((result) => (
                    <div id="list" key={result.key}>
                        <div>Author Name: {result.name}</div>
                        <button onClick={() => handleSelectAuthor(result.key)}>Select</button>
                    </div>
                ))}
            </div>

            {selectedAuthor && (
                <div>
                    <img id="authorpic" key={selectedAuthor.key}
                        alt={selectedAuthor.name}
                        src={`http://covers.openlibrary.org/a/id/${selectedAuthor.photos[0]}.jpg`} />
                    <div>Author Name: {selectedAuthor.personal_name}</div>
                    <div>Bio: {selectedAuthor.bio}</div>
                    <div>{selectedAuthor.birth_date} - {selectedAuthor.death_date}</div>
                </div>
            )}
        </div>
    );
};

export default Homepage;