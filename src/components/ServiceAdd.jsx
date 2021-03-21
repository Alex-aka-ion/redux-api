import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addService, addServiceSuccess, changeServiceField, fetchItem, fetchServices} from "../actions/actionCreators";
import {Button, Form, Spinner} from "react-bootstrap";
import {useHistory, useParams} from 'react-router-dom';

export default function ServiceAdd() {
    const {item, loading, error} = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        if (id) {
            fetchItem(dispatch, Number(id));
        }
    }, [dispatch]);

    const handleChange = e => {
        const {name, value} = e.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addService(dispatch, item, () => history.push('/services/'));
    }

    const handleCancel = e => {
        e.preventDefault();
        dispatch(addServiceSuccess());
        history.push('/services/');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={item.name} onChange={handleChange} disabled={loading}/>
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={item.price} onChange={handleChange} disabled={loading}/>
            </Form.Group>
            <Form.Group controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" name="content" value={item.content} onChange={handleChange}
                              disabled={loading}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>{loading ?
                <Spinner animation="border" size="sm"/> : 'Save'}</Button>
            {item.id !== 0 && <button className="btn btn-info" onClick={handleCancel}>Cancel</button>}
            {error && `Error: ${error}`}
        </Form>
    )
}
