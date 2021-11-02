import React from "react";
import Button from "../../Header/Button"
import Categories from './Categories'
import SortPopup from "./SortPopup";
import '../ShopBody.css'

export default function OptionalString() {
    return (
        <div className="optionalString">
            <Categories items={['Android', 'iOS']}/>
            <Button sorting>
                <SortPopup items={[
                    {name: 'Popular', type: 'popular'},
                    {name: 'Price', type: 'price'},
                    {name: 'Alphabet', type: 'alphabet'},

                    ]}/>
            </Button>

        </div>
        );

    }