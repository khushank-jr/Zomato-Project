import React from 'react'
import classNames from 'classnames';

const MenuCategory = (props) => {
    return (
        <>
            <div
                className={classNames({ "text-zomato-400 py-2 px-1 bg-zomato-50 border-r-4 border-zomato-100": props.isActive })}
            >
                <h3
                    id={props.name}
                    onClick={props.onClickHandler}
                >{props.name} ({props.items.length}) </h3>
            </div>
        </>
    )
}

export default MenuCategory;