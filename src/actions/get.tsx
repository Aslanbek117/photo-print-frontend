import { httpClient } from "../http/http";
import { CreateProductDTO, CreateProductModel } from "../dto/CreateProductDTO";
import { Product } from "../components/sidebar/product/Product";





//Products List
export const GetProductsList = async (): Promise<any> =>  {
    try {
        const response = await (await httpClient()).get("product/list")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const CreateProduct = async(body: any): Promise<any> => {
    console.log("HERE");
    try {

        // let body: CreateProductModel = {
        //     product: createProductDTO
        // }

        // console.log(JSON.stringify(body));
        // let body = {
        //     "product": {
        //         "title": createProductDTO.title,
        //         "isAqua": createProductDTO.isAqua,
        //         "isEat": createProductDTO.isEat,
        //         "unit": createProductDTO.unit
        //     }
        // };
        
        console.log("sending", JSON.stringify(body))
        const response = await (await (await httpClient()).post("product/create", body))
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}
