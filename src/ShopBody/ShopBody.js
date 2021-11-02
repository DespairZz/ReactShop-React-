import React from 'react';
import ShopItem from './components/Item'
import OptionalString from './components/OptionString'

export default function ShopBody({items}) {
    return (
        <div>
            <OptionalString />
            <div className="itemBody">
            {items.map((obj) => (
                <ShopItem key={obj.id} {...obj} />
            ))}
            </div>
        </div>

        
    );

}