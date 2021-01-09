import { ProductEntity } from "./Product";
import { ObjectEntity } from "./Object";

export interface StorageEntity {
    id: number;
    amount: number;
    created: Date;
    updated: Date;
    product: ProductEntity;
    min_limit: number;
    object: ObjectEntity;
    income: number;
}
