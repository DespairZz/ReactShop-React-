import React, { useState } from "react";
import '../ShopBody.css'
import Button from "../../Header/Button"
import classNames from "classnames";


export default function ShopItem({name, price, imageUrl, types}) {

    const [activeType, setActiveType] = React.useState(types[0]);
    const color = ['Black', 'White', 'Red', 'Blue'];

    const onSelectType = (index) => {
        setActiveType(index);
    };

    return (
        <div className="itemCase">
            <center><img className="itemPhoto" src={imageUrl} alt="Device" /></center>
            
            <div className="itemTitle"><strong>{name}</strong></div>

           
           <div>
                 <div className="phone-block__selector">
                    <ul>
                        {color.map((type, index) => (
                        
                        <li 
                        key={type}
                        onClick={() => onSelectType(index)} 
                        className={classNames({
                            active : activeType === index,
                            disabled : !types.includes(index),
                        })}>{type}</li>
                        )) }

                    </ul>
                </div>
            </div>

            <div className="itemPrice"><strong>{price}</strong> $</div>
            <center><Button add>Add to Cart</Button></center>
        </div>
    );
}