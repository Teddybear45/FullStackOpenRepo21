import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Post from "./components/Post";
import Posts from "./components/Posts";
import blogposts from "./services/blogposts";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		blogposts.getAll().then((data) => {
			setPosts(data);
			console.log(data);
		});
	}, []);

	return (
		<div>
			<h1>Blog List</h1>
			<Posts posts={posts} />
		</div>
	);
}

export default App;
