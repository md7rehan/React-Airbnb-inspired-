import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../assets/images/logo.png'; // Update the path as per your folder structure
import globe from '../assets/images/globe.png'; // Update the path as per your folder structure
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isHovered, setIsHovered] = useState({
        location: false,
        checkIn: false,
        checkOut: false,
        guests: false,
        airbnbYourHome: false,
        globeIcon: false,
        profileIcon: false,
        stays: false,
        experiences: false,
        onlineExperiences: false,
    });

    const handleSearch = () => {
        // Perform search logic with startDate and endDate
        console.log('Performing search...');
    };

    const styles = {
        navbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 30px',
            backgroundColor: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            margin: '1em',
        },
        logo: {
            height: '35px',
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
        navLink: {
            margin: '0 15px',
            textDecoration: 'none',
            color: '#000',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '20px',
            transition: 'background-color 0.3s, color 0.3s',
        },
        navLinkHover: {
            backgroundColor: '#ff385c',
            color: '#fff',
        },
        actionContainer: {
            display: 'flex',
            alignItems: 'center',
            gap:'20px',
        },
       

        actionButtonHover: {
            backgroundColor: '#ff385c',
            color: '#fff',
        },
        
        profileContainer: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: '20px',
            padding: '5px 10px',
            cursor: 'pointer',
        },
        profileIcon: {
            height: '20px',
            marginRight: '25px',
            marginLeft: '30px',
        },
        menuIcon: {
            height: '24px',
        },
        searchBar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '33px',
            backgroundColor: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ddd',
            borderRadius: '50px',
            width: '65%',
            maxWidth: '1000px',
            height: '20px',
            margin: '0 auto',
        },

        additionaLink: {
            margin: '0 15px',
            textDecoration: 'none',
            color: '#000',
            fontSize: '16px',
            padding: '5px',
            borderRadius: '20px',
            transition: 'background-color 0.3s, color 0.3s',
        },

        inputField: { 
            flex: 1,
            borderRadius: '50px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            padding: '8px',
        },
        inputFieldHover: {
            borderColor: '#ff385c',
            boxShadow: '0 0 5px rgba(255, 56, 92, 0.5)',
        },
        searchButton: {
            width: '50px',        // Ensure the width and height are equal
            height: '50px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            padding: '20px ',
            border: 'none',
            backgroundColor: '#ff385c',
            color: 'white',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '35px',
            outline: 'none',
            position: 'relative',
            transform: 'rotate(-90deg)', 
            
        },
            
        dividerLine: {
            borderLeft: '1px solid #ddd',
            height: '35px',
            marginLeft: '-1px',
            marginRight:'10px'
        },
        labelText: {
            fontSize: '13px',
            fontWeight: 'medium',
            marginRight: '10px',
        },
        globeIcon: {
            height: '20px',
            width: '20px',
            borderRadius: '50%',
            transition: 'background-color 0.3s, transform 0.3s',
            borderLeft:'20px',
        },
        globeIconHover: {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.1)',
        }
    };

    const handleMouseEnter = (field) => {
        setIsHovered({ ...isHovered, [field]: true });
    };

    const handleMouseLeave = (field) => {
        setIsHovered({ ...isHovered, [field]: false });
    };

    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
        
    return (
        <nav>
            <div style={styles.navbar} >
                {/* Logo */}
                <a href="/">
                    <img
                        src={logo}
                        alt="Airbnb"
                        style={styles.logo}
                    />
                </a>

                {/* Links */}
                <ul style={styles.navLinks}>
                    <li>
                        <a 
                            href="/" 
                            style={{ 
                                ...styles.navLink, 
                                ...(isHovered.stays ? styles.navLinkHover : {}),
                            }}
                            onMouseEnter={() => handleMouseEnter('stays')}
                            onMouseLeave={() => handleMouseLeave('stays')}
                        >
                            Stays
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/Experiences" 
                            style={{ 
                                ...styles.navLink, 
                                ...(isHovered.experiences ? styles.navLinkHover : {}),
                            }}
                            onMouseEnter={() => handleMouseEnter('experiences')}
                            onMouseLeave={() => handleMouseLeave('experiences')}
                        >
                            Experiences
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/Online-Experiences" 
                            style={{ 
                                ...styles.navLink, 
                                ...(isHovered.onlineExperiences ? styles.navLinkHover : {}),
                            }}
                            onMouseEnter={() => handleMouseEnter('onlineExperiences')}
                            onMouseLeave={() => handleMouseLeave('onlineExperiences')}
                        >
                            Online Experiences
                        </a>
                    </li>
                </ul>

                {/* Additional Links */}
                <div style={styles.actionContainer}>
                    <a 
                        href="/about" 
                        style={{ 
                            ...styles.additionaLink,
                            ...(isHovered.airbnbYourHome ? styles.navLinkHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('airbnbYourHome')}
                        onMouseLeave={() => handleMouseLeave('airbnbYourHome')}
                    >
                        Airbnb your home
                    </a>

                    <div
                        style={{
                            
                            ...styles.globeIcon,
                            ...(isHovered.globeIcon ? styles.globeIconHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('globeIcon')}
                        onMouseLeave={() => handleMouseLeave('globeIcon')}
                    >
                        <a href="/" className="flex items-center">
                            <img
                                src={globe}
                                alt="Globe Logo"
                                className="h-full w-full"
                                style={{ borderRadius: '50%' }}
                            />
                        </a>
                    </div>

                    <a 
                        href="/" 
                        className="flex items-center"
                        style={{
                            ...styles.additionaLink,
                            ...styles.profileContainer,
                            ...(isHovered.profileIcon ? styles.inputFieldHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('profileIcon')}
                        onMouseLeave={() => handleMouseLeave('profileIcon')}
                    >
                        <img
                            src="https://img.icons8.com/material-rounded/24/000000/menu.png"
                            alt="Menu Icon"
                            style={styles.menuIcon}
                        />
                    </a>
                </div>
            </div>

            {/* Search Bar */}
            <div >
                <div style={styles.searchBar}>
                    <div
                        style={{
                            ...styles.inputField,
                            ...(isHovered.location ? styles.inputFieldHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('location')}
                        onMouseLeave={() => handleMouseLeave('location')}
                    >
                        <span style={styles.labelText}>Where</span>
                        <input type="text" placeholder="Search destination" style={{ border: 'none', outline: 'none', width: '100%' }} />
                    </div>

                    <div style={styles.dividerLine}></div>

                    <div
                        style={{
                            ...styles.inputField,
                            ...(isHovered.checkIn ? styles.inputFieldHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('checkIn')}
                        onMouseLeave={() => handleMouseLeave('checkIn')}
                    >
                        <span style={styles.labelText}>Check in</span>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Add dates"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>

                    <div style={styles.dividerLine}></div>

                    <div
                        style={{
                            ...styles.inputField,
                            ...(isHovered.checkOut ? styles.inputFieldHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('checkOut')}
                        onMouseLeave={() => handleMouseLeave('checkOut')}
                    >
                        <span style={styles.labelText}>Check out</span>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="Add dates"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>

                    <div style={styles.dividerLine}></div>
                    
                    <div
                        style={{
                            ...styles.inputField,
                            ...(isHovered.guests ? styles.inputFieldHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter('guests')}
                        onMouseLeave={() => handleMouseLeave('guests')}
                    >
                        <span style={styles.labelText}>Who </span>
                        <input type="text" placeholder="Add guests" style={{ border: 'none', outline: 'none', width: '100%' }}  />
                       
                    </div>

                    <button style={styles.searchButton} onClick={() => window.location.href = '/'}>⌕</button>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
