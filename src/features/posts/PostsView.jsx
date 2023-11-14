import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice";

const PostsView = () => {
	const {isLoading, posts, error} = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{posts && posts.map((post) => {
				return (
					<div key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				)
			})}
		</div>
	)
}

export default PostsView