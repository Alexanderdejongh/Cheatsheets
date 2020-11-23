import React, { Component } from 'react'
import foto from './Foto.jpg'
import Form from './Form'

class Shoplist extends Component {
    
    constructor() {
        super();
        this.state = {
            buyItems:
            [
            'Milk', 'Bread', "Fruit"
            ]
        }
    }
    render() {
        
        const {buyItems} = this.state;
        const addItem = (e)=> {
            e.preventDefault()
            const newItem = this.newItem.value;
            this.setState({
            buyItems: [...this.state.buyItems, newItem ]
        })
        };
        
        
        return ( 
        <div className="shopinglistBox">
            <img src={foto} alt="shoppingbag" className="shoppingbag"/>
            <Form addItem={addItem} />
            <div className="shoppinglistItems">
                {buyItems.map((item, index) =>{
                    return<p className="shopItem" key={index} cla>{item}</p>
                })}
            </div>
        </div>
        )
    }
}

export default Shoplist