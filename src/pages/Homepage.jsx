import React, { useEffect, useState } from 'react'

const Homepage = () => {
    const [searchAuthor, setSearchAuthor] = useState(``);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (searchAuthor.trim() === '') { 
            return;
        }


        fetch(`http://openlibrary.org/search.json?author=${searchAuthor}`)
            .then((response) => response.json())
            .then((result) => setData(result.docs))
                console.log(data)
            .catch((error) => console.error('sorry, problem getting data', error));
    });

  return (
    <div>
          <input
              type = "text"
              value = {searchAuthor}
              onChange = {(e) => setSearchAuthor(e.target.value)}
              placeholder = "Author Name"
          />
          {data.map((results) => (
              <div key={results.key}>{results.title}</div>
          ))}
    </div>
  )
}

export default Homepage