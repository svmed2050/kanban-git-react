import './App.css'
import Kanban from './components/kanban'
import RepoInput from './components/repoinput'

function App() {
	return (
		<div style={{ padding: '50px' }}>
			<h1 style={{ marginBottom: '20px' }}>Kanban</h1>
			<RepoInput />
			<Kanban />
		</div>
	)
}

export default App
