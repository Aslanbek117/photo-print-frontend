import React, { FunctionComponent } from 'react'
import { Product } from '../sidebar/product/Product';
import { GetProductsList } from '../../actions/get';
import { Income } from '../income/Income';


interface ContentProps {
    state: number;
    title: string;
}



export const Wrapper: FunctionComponent<ContentProps> = (props: ContentProps) => {
    let toDisplay;
    if (props.state === 1) {
        toDisplay = <Product isModalVisible={false}  />

    } else if (props.state === 2) {
        toDisplay = <Income isModalVisible={false} />
    }
    return (
        <div>
            {toDisplay}
        </div>
    )
}