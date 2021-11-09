import React from 'react';
import ShopItem from './components/Item'
import { useSelector, useDispatch } from 'react-redux';
import Categories from './components/Categories';
import Button from "../Header/Button";
import SortPopup from "./components/SortPopup";
import './ShopBody.css'
import { setCategory } from "../redux/actions/filters";

const catNames = ['Android', 'iOS'];
const sortItems = [
    {name: 'Popular', type: 'popular'},
    {name: 'Price', type: 'price'},
    {name: 'Alphabet', type: 'alphabet'},
];

export default function ShopBody() {

    

    const dispatch = useDispatch();
    const items  = useSelector(({ phones }) => phones.items);

    const onSelectCatagory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div>

<div className="optionalString">
            <Categories
            onClickItem={onSelectCatagory}
            items={catNames}
            />

            <Button sorting>
                <SortPopup items={sortItems}/>
            </Button>

        </div>


            <div className="itemBody">
            {items && items.map((obj) => (
                <ShopItem key={obj.id} {...obj} />
            ))}
            </div>
        </div>

        
    );

}