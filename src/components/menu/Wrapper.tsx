import React, { FunctionComponent } from 'react'
import { Product } from '../sidebar/product/Product';
import { Storage } from '../storage/Storage';
import { GetProductsList } from '../../actions/get';
import { Income } from '../income/Income';
import { Consumption } from '../consumption/Consumption';
import { ObjectComponent } from '../objects/Object';

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
    } else if (props.state === 3) {
      toDisplay = <Consumption isModalVisible={false} />   
    } else if (props.state === 4) {
         toDisplay = <Storage isModalVisible={false} />
    } else if (props.state === 5) {
        toDisplay = <ObjectComponent isModalVisible={false} />
   }
    return (
        <div>
            {toDisplay}
        </div>
    )
}