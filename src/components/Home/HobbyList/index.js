import React from "react";
import './hobbyList.css'

const HobbyList = (props) => {
    const {hobbyList, activeId, onHobbyClick} = props;

    const handleClick = (hobby) => {
            onHobbyClick(hobby);
    }

    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li 
                    key={hobby.id}
                    className={hobby.id === activeId ? 'active' : ''}
                    onClick={() => handleClick(hobby)}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    )
}
export default HobbyList;