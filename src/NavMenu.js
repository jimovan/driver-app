import data from './data/menu.json';

const NavMenu = () => {

    return (<nav className="menu">
        <ul>
            {data.data.map((item) => <li key={item.url}> {item.title} </li>)}
        </ul>
    </nav>);
}

export default NavMenu;