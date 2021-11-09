import React from 'react';

const SortPopup = React.memo(function SortPopup({ items }) {
   
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const [activeItem, setActiveItem] = React.useState(0);

    const sortRef = React.useRef();

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        const sort = document.querySelector('.sort');
        console.log(sort);
    }, []);

    
    return (
        
                <div ref={sortRef} className="sort">
              <div className="sort--butt">
                <b onClick={() => setVisiblePopup(!visiblePopup)}>SORT</b>
              </div>
              {visiblePopup && <div className="sort__popup">
                <ul>
                    
                {items &&
                    items.map((obj, index) => (
                    <li onClick={() => onSelectItem(index)} 
                    className={activeItem === index ? 'active' : ''}
                    key={`${obj.type}_${index}`}>
                        {obj.name}
                    </li>

                    ))}
                </ul>
              </div>}
            </div>
          

    )
});

export default SortPopup;
