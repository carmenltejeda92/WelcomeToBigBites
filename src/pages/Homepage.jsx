import React, { useEffect } from 'react'

const Homepage = () => {
    const [data, setData] = useState(``);

    useEffect(() => { 
        fetch("http://openlibrary.org/search.json?author=calvino")
            .then((response) => response.json())


    }
    
    )

  return (
    <div>
      
    </div>
  )
}

export default Homepage