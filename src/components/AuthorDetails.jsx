import React from 'react';

const AuthorDetails = ({ author }) => {
  if (!author) return <div> no author data</div>;

  return (
    <div>
        <img
            id="authorPic"
            key={author.key}
            alt={author.name}
            src={`http://covers.openlibrary.org/a/id/${author.photos[0]}.jpg`}
          />
          
        <div>Author Name: {author.personal_name}</div>
        <div>Bio: {author.bio}</div>
        <div>{author.birth_date} - {author.death_date}</div>
    </div>
  );
};

export default AuthorDetails;