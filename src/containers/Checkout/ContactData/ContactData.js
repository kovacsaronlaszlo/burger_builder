import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-order';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'aron',
                address: {
                    street: 'street',
                    zipCode: '1111',
                    country: 'hungary'
                },
                email: 'email@email.hu'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render () {
        let form = (
            <from>
                <input className={classes.Input} type="text" name="name" placeholder="your name" />
                <input className={classes.Input} type="text" name="email" placeholder="your email" />
                <input className={classes.Input} type="text" name="street" placeholder="your street" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="your postalCode" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </from>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;