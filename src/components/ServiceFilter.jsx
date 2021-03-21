import {useDispatch, useSelector} from "react-redux";
import {changeServiceFilter, resetFilter} from "../actions/actionCreators";
import React from "react";

export default function ServiceFilter() {
    const filter = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(changeServiceFilter(e.target.value));
    }

    const handleClear = e => {
        e.preventDefault();
        dispatch(resetFilter());
    }

    return (
        <form>
            <label htmlFor={filter}>Filter:</label>
            <input name="filter" onChange={handleChange} value={filter}/>
            <button type='submit' onClick={handleClear}>Clear</button>
        </form>
    )
}
