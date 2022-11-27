import './App.css';
import StyledWrapper from './common/StyledWrapper/StyledWrapper';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	return (
		<StyledWrapper direction={'column'}>
			<Routes>
				<Route path={'/'} element={<MainPage />}>
					<Route path={'/'} element={<Navigate to={'/course-list'} />} />
					<Route path={'/course-list'} element={<Courses />} />
					<Route path={'/create-course'} element={<CreateCourse />} />
				</Route>
			</Routes>
		</StyledWrapper>
	);
}

export default App;
