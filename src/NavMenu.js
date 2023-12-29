import data from './data/menu.json';

const NavMenu = () => {

    return (<nav className='menu'>
        {data.data.map((item) => <a key={item.url}> {item.title} </a>)}
    </nav>);
}

export default NavMenu;