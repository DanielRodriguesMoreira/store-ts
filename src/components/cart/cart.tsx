import { IProduct } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';

interface CartProps {
    selectedProducts: IProduct[];
}

export const Cart = ({selectedProducts}: CartProps) => {
    const [sum, setSum] = useState(0);
    const [sumWithTax, setSumWithTax] = useState(0);

    useEffect(() => {
        setSum(0);
        selectedProducts.forEach(item => setSum(prevState => prevState + item.price));
    }, [selectedProducts])

    useEffect(() => {
        setSumWithTax(sum * 1.23);
    }, [sum])

    return <>
        {selectedProducts.map((item, index) =>
            <div key={index}>
                <p>Product: {item.name} ➡️ {item.price}€</p>
                <p>-------------------------------------</p>
            </div>)}
        <b>TOTAL: {sum}€</b>
        <br />
        <em>Total (tax included): {sumWithTax}€</em>
    </>
}