import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

const MainPage = () => (
	<>
		<Header />
		<Outlet />
	</>
);

export default MainPage;
