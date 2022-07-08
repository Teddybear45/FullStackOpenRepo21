import React from "react";
import { Fragment } from "react";

const Post = ({ title, author, url, votes }) => {
	return (
		<li>
			<h2>{title}</h2>
			<p>by {author}</p>
			<p>
				<a href={url}>{url}</a>
			</p>
			<p>votes: {votes}</p>
			<hr />
		</li>
	);
};

export default Post;
