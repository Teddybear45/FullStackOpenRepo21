import React from "react";
import Post from "./Post";

const Posts = ({posts}) => {
	return (
		<ul>
			{posts.map((post) => (
				<Post
					key={post.id}
					title={post.title}
					author={post.author}
					url={post.url}
					votes={post.likes}
				/>
			))}
		</ul>
	);
};

export default Posts;
