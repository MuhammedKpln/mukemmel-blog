import React from "react";
import Link from "next/link";
import UserDetails from "./userDetails";
import ReactHtmlParser from 'react-html-parser';


const SinglePost = props => {
  const {
    title,
    slug,
    details,
    date,
    detailsPage,
    userName,
    userImage,
    image
  } = props;
  if (!detailsPage) {
    return (
      <Link href="/[postId]" as={`/${slug}`}>
        <div className="sm:w-1/4 m-5 bg-gray-100 p-5 rounded-lg cursor-pointer">
          <h2 className="font-bold text-2xl py-5">
            <Link href={slug}>
              <a className="blog-title-link">{title}</a>
            </Link>
          </h2>
          <div className="blog-text leading-relaxed">
            {ReactHtmlParser(details.substring(0, 250))}
          </div>

          <UserDetails name={userName} image={userImage} />

        </div>
      </Link>
    );
  } else {
    return (
      <div className="w-full m-5 p-5 rounded-lg">
        <h2 className="font-bold text-5xl py-5 text-center">
          <Link href={slug}>
            <a className="blog-title-link">{title}</a>
          </Link>
        </h2>
        <div className="blog-text leading-relaxed">
          {ReactHtmlParser(details)}
        </div>
        <hr />
        <UserDetails name={userName} image={userImage} className="mt-5">
          <div className="blog-date">{date}</div>
          <div>
            <span className="icon-twitter-squared" />
            <a href={`https://twitter.com/intent/tweet?text=${title}`} target="_blank">Tweet this post!</a>
          </div>
        </UserDetails>
      </div>
    );
  }
};

export default SinglePost;
