import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
  const articlesArray = posts.map((post) => {
      return (
      <Article key="id"
        id={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />);
      });
  return <main>{articlesArray}</main>;
}

export default ArticleList;
