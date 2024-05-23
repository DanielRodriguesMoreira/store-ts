import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IProduct } from './interfaces/product.interface';
import { Cart } from './components/cart/cart';

/**
 * This is a simple React + Typescript app to demonstrate how Typescript can help solve some problems (potentially bugs)
 * and improve the speed of development (since it as a great integration with the IDE).
 *
 * Advantages:
 * ✅ Strongly typed
 * ✅ Better integration with IDE
 * ✅ Code more readable and maintainable
 * ✅ Less error prone
 *
 */

function App() {
    const products: IProduct[] = [
      {name: 'camisola', price: 15},
      {name: 'calças', price: 20},
      {name: 'sapatos', price: 15},
    ];

    const [cart, setCart] = useState<IProduct[]>([]);

    const addToCart = (item: IProduct) => {
      setCart([...cart, item]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className={'wrapper'}>
              <div className={'products'}>
                <h1>Products:</h1>
                {products.map((item, index) =>
                    <div key={index}>
                      <p>Product name: {item.name}</p>
                      <p>Product price: {item.price}€</p>
                      <button onClick={() => addToCart(item)}>Add {item.name} to cart</button>
                      <p>----------------------------</p>
                    </div>)}
              </div>
              <div className={'cart'}>
                <h1>Cart:</h1>
                <Cart selectedProducts={cart} />
              </div>
            </div>
        </div>
    );
}

export default App;
