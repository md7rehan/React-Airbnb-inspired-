import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '63%',
    maxWidth: '1000px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '50px',
    boxShadow: '0 1px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    margin: '0 auto',
    marginTop:'10px',
    position: 'relative',
    height: '60px',
  },
  inputField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '8px 12px',
    borderRadius: '50px',
    backgroundColor: '#f0f0f0',
    width: '200px',
    height: '48px',
    position: 'relative',
    transition: 'all 0.2s ease',
    overflow: 'hidden',
  },
  inputFieldHover: {
    border: '1px solid #f7f7f',
    
  },
  labelText: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '4px',
  },
  unifiedInput: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '50px',
    height: '48px',
    padding: '8px 20px',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    position: 'relative',
    marginTop: '-10px'
   
  },
  unifiedInputLabel: {
    fontSize: '14px',
    color: '#333',  
    fontWeight: '500',        // Adjust font weight
    fontFamily: 'Helvetica, sans-serif',
  },
  unifiedInputField: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
    height: '100%',
    padding: '0',
  },
  dividerLine: {
    height: '35px',
    width: '1px',
    backgroundColor: '#ddd',
  },
  searchButton: {
    width: '50px',        // Ensure the width and height are equal
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#ff385c',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '8px 10px',
    cursor: 'pointer',
    fontSize: '28px',
    marginLeft: '10px',
    transform: 'rotate(-90deg)', 
  },
};

const Searchbar = () => {
  const [isHovered, setIsHovered] = useState({
    location: false,
    checkIn: false,
    checkOut: false,
    guests: false,
  });
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState('');

  const handleMouseEnter = (field) => setIsHovered((prev) => ({ ...prev, [field]: true }));
  const handleMouseLeave = (field) => setIsHovered((prev) => ({ ...prev, [field]: false }));

  return (
    <div className="flex h-20 items-center justify-center">
      <div style={styles.container}>
        
        <div
          style={{
            ...styles.unifiedInput,
            ...(isHovered.location ? styles.inputFieldHover : {}),
            
          }}
          onMouseEnter={() => handleMouseEnter('location')}
          onMouseLeave={() => handleMouseLeave('location')}
        >
          <span style={styles.unifiedInputLabel}>Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={styles.unifiedInputField}
          />
        </div>

        <div style={{ ...styles.dividerLine, marginRight: '', marginLeft: '60px' }}></div>

        <div
          style={{
            ...styles.unifiedInput,
            ...(isHovered.checkIn ? styles.inputFieldHover : {}),
            
          }}
          onMouseEnter={() => handleMouseEnter('checkIn')}
          onMouseLeave={() => handleMouseLeave('checkIn')}
        >
          <span style={styles.unifiedInputLabel}>Check in</span>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Add dates"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div style={{ ...styles.dividerLine, marginRight: '', marginLeft: '-80px' }}></div>

        <div
          style={{
            ...styles.unifiedInput,
            ...(isHovered.checkOut ? styles.inputFieldHover : {}),
            
          }}
          onMouseEnter={() => handleMouseEnter('checkOut')}
          onMouseLeave={() => handleMouseLeave('checkOut')}
        >
          <span style={styles.unifiedInputLabel}>Check out</span>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            placeholderText="Add dates"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div style={{ ...styles.dividerLine, marginRight: '10px', marginLeft: '-80px' }}></div>

        <div
          style={{
            ...styles.unifiedInput,
            ...(isHovered.guests ? styles.inputFieldHover : {}),
          }}
          onMouseEnter={() => handleMouseEnter('guests')}
          onMouseLeave={() => handleMouseLeave('guests')}
        >
          <span style={styles.unifiedInputLabel}>Who</span>
          <input
            type="text"
            placeholder="Add guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={styles.unifiedInputField}
          />
        </div>

        <button style={styles.searchButton} onClick={() => window.location.href = '/'}>⌕</button>
        
      </div>
    </div>
  );
};

export default Searchbar;
