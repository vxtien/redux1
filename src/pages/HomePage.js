import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

const HomePage = () => {
    // stric comparison
    // shallow comparison

    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log(hobbyList);

    const handleAddHobbyClick = () => {
        //random a hobby object: id + title
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }
        //dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div>
            <h1>Redux</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            >
            </HobbyList>
        </div>
    )
}
export default HomePage;