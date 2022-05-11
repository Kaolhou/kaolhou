import './index.css'

export function NavBar(props){
    return(
        <nav className='navbar'>
            <ul className='navbaritem'>{props.children}</ul>
        </nav>
    )
}