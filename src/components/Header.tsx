import  { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/Login">PDF Scanner</Link></li>
                <li><Link to="/doclist">Doc</Link></li>
                <li
                    className={`list-item dropdown ${isDropdownOpen ? 'open' : ''}`}
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <span className="dropdown-toggle">Dropdown</span>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item"><Link to="/get-started">Get Started</Link></li>
                        <li className="dropdown-item"><Link to="/community">Community</Link></li>
                        <li className="dropdown-item"><Link to="/general-questions">General Questions</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}