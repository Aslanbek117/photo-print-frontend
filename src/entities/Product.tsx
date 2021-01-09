import { StorageEntity } from "./Storage";

export interface ProductEntity {
    id: number;
    title: string;
    unit: string,
    created: Date;
    updated: Date;
    storage: StorageEntity[];
}