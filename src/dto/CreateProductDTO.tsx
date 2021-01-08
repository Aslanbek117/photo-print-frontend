export interface CreateProductDTO{
    title: string;
    isAqua: boolean;
    isEat: boolean;
    unit: string;
}

export interface CreateProductModel{
    product: CreateProductDTO;
}