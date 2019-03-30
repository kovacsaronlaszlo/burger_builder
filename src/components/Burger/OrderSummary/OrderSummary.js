import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {

    // this could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary]: componentWillUpdate')
    }

    render() {

        const ingredientDummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
                    </li>
                );
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with th following ingredients:</p>
                <ul>
                    {ingredientDummary}
                </ul>
                <p><b>Total price: {this.props.price.toFixed(2)}</b></p>
                <p>Continue to Checkout</p>
                <Button 
                    btnType='Danger' 
                    clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button 
                    btnType='Success' 
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;