import './App.css'
import CounterView from './features/counter/counterView'
import PostsView from './features/posts/PostsView'

function App() {
	return (
		<>
			<h1>Counter App by Redux-Toolkit</h1>
			<CounterView/>
			<hr/>
			<PostsView/>
		</>
	)
}

export default App
