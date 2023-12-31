import data from './data/menu.json';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (<nav className='menu'>
        {data.data.map((item) => <NavLink to={item.url} key={item.url}>{item.title}</NavLink>)}
    </nav>);
}

export default NavMenu;