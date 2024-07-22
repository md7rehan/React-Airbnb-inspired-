import React, { useRef, useState, useEffect } from 'react';
import { FaUmbrellaBeach, FaSwimmingPool, FaTractor, FaMountain, FaDraftingCompass, FaTree } from 'react-icons/fa';

const iconsData = [
    { name: 'Amazing views', icon: <FaMountain size={24} style={{ color: '#666' }} /> },
    { name: 'Farms', icon: <FaTractor size={24} style={{ color: '#666' }} /> },
    { name: 'Amazing pools', icon: <FaSwimmingPool size={24} style={{ color: '#666' }} /> },
    { name: 'Tropical', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Design', icon: <FaDraftingCompass size={24} style={{ color: '#666' }} /> },
    { name: 'Beachfront', icon: <FaUmbrellaBeach size={24} style={{ color: '#666' }} /> },
    { name: 'Countryside', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Cabins', icon: <FaTree size={24} style={{ color: '#666',  }} /> },
    { name: 'OMG!', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Treehouses', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Lakefront', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Rooms', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Adventure', icon: <FaMountain size={24} style={{ color: '#666' }} /> },
    { name: 'Luxury', icon: <FaSwimmingPool size={24} style={{ color: '#666' }} /> },
    { name: 'Family', icon: <FaTractor size={24} style={{ color: '#666' }} /> },
    { name: 'Romantic', icon: <FaUmbrellaBeach size={24} style={{ color: '#666' }} /> },
    { name: 'Rustic', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Modern', icon: <FaDraftingCompass size={24} style={{ color: '#666' }} /> },
    { name: 'Cozy', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Countryside', icon: <FaTree size={24} style={{ color: '#666' }} /> },
    { name: 'Ski', icon: <FaMountain size={24} style={{ color: '#666' }} /> }
  ];
const visibleIcons = 14; // Number of visible icons at once
const iconWidth = 100; // Width of each icon card in pixels
const iconMargin = 7; // Margin between icons in pixels
const scrollAmount = (iconWidth + iconMargin) * visibleIcons; // Amount to scroll by

const Icons = () => {
  const iconsWrapperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleNext = () => {
    if (iconsWrapperRef.current) {
      iconsWrapperRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (iconsWrapperRef.current) {
      iconsWrapperRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updateScrollPosition = () => {
      if (iconsWrapperRef.current) {
        const maxScroll = iconsWrapperRef.current.scrollWidth - iconsWrapperRef.current.clientWidth;
        const currentScroll = iconsWrapperRef.current.scrollLeft;

        setIsAtStart(currentScroll <= 0);
        setIsAtEnd(currentScroll >= maxScroll);
      }
    };

    const handleScroll = () => updateScrollPosition();
    const handleResize = () => updateScrollPosition();

    updateScrollPosition(); // Initial call
    window.addEventListener('resize', handleResize);
    iconsWrapperRef.current.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      iconsWrapperRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.iconsContainer}>
      {!isAtStart && (
        <button onClick={handlePrevious} style={styles.navButton}>
          &lt;
        </button>
      )}
      <div ref={iconsWrapperRef} style={styles.iconsWrapper}>
        {iconsData.map((item, index) => (
          <div style={styles.iconCard} key={index}>
            {item.icon}
            <p style={styles.iconName}>{item.name}</p>
          </div>
        ))}
      </div>
      {!isAtEnd && (
        <button onClick={handleNext} style={styles.navButton}>
          &gt;
        </button>
      )}
    </div>
  );
};

const Iconbar = () => {
  return (
    <div style={styles.app}>
      <Icons />
    </div>
  );
};

const styles = {
  app: {
    padding: '20px',
    display: 'flex',
    marginTop: '-40px'
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  iconsWrapper: {
    display: 'flex',
    overflowX: 'hidden', // Hide scrollbar
    whiteSpace: 'nowrap',
    width: 'calc(100% - 80px)', // Adjust to fit within container including nav buttons
  },
  iconCard: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `0 ${iconMargin}px`,
    padding: '10px',
    textAlign: 'center',
    flexShrink: 0,
    width: `${iconWidth}px`, // Fixed width of each icon card
  },
  iconName: {
    marginTop: '5px',
    fontSize: '16px',
  },
  navButton: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    top: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.5em',
    zIndex: 1,
    // Adjust button positions
    left: '10px',
    right: '10px',
  },
};

export default Iconbar;
