import './App.css'
import Kanban from './components/kanban'
import RepoInput from './components/repoinput'

function App() {
	return (
		<div /* 	style={{ padding: '50px' }}  */ className='app-container'>
			<div className='main-wrapper'>
				<h1 style={{ marginBottom: '20px' }}>
					Kanban
					<hr />
				</h1>
				<RepoInput />
				<Kanban />
			</div>
		</div>
	)
}

export default App
