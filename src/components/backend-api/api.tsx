import { UserPost } from "models/search/Search";
import { httpClient } from "../../http/http";
const baseUrl ="https://photo-print-backend-zm8lp.ondigitalocean.app/pub/v1"

export const GetPhotoPrints= async (token: string, page: string, perPage: string, category: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl+"/merchants?page=" + page + "&per_page=" +perPage +"&category=" + category)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const GetCategories = async (token: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl+ "/categories")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetItem = async (token: string, id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/item?id=" + id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}




export const SearchItems = async (token: string, text: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/search?search=" + text)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const Register = async (token: string, body: UserPost): Promise<any> => {
    try {
        console.info("API: ", body)
        const response = await (await httpClient(token)).post(baseUrl +"/register", {"email": body.email, "password": body.password})
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const Login = async (token: string, body: UserPost): Promise<any> => {
    try {
        console.info("API: ", body)
        const response = await (await httpClient(token)).post(baseUrl + "/login", {"email": body.email, "password": body.password})
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const Comment = async (token: string, email: string, name: string, text: string, state: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).post(baseUrl + "/comment", {"email": email, "name": name, "text": text})
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetComments = async (token: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/comments")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const UpdateUserInfo = async (token: string, name: string, lastName: string, city: string, district: string, number: string, address: string, id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).post(baseUrl + "/user-info", {"name": name, "last_name": lastName, "city": city, "district": district, "telephone_number": number, "address": address, "id": id })
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const AddToBasketAPI = async (token: string, picture_id:number, size_id: number, material_id: number, module_id: number, user_id: number, price: number, img_path: string, title: string): Promise<any> => {
    try {
        let newPrice = parseInt(price.toString(), 10)
        const response = await (await httpClient(token)).post(baseUrl + "/add-to-basket", {"picture_id": picture_id, "size_id": size_id, "material_id": material_id, "module_id": module_id, "user_id": user_id, "price":newPrice, "img_path": img_path, "title": title })
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const GetBasketList = async (token: string, user_id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/basket-list?id=" +user_id )
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const RemoveOrder = async (token: string, user_id: number, order_id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).put(baseUrl + "/remove-order?id=" +user_id +"&order_id="+order_id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const CreateInvoiceDB = async (token: string, user_id: number, order_ids: string, name: string, last_name: string, delivery_address: string, telephone_number: string, price_all: number, delivery_price: number, final_price: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).post(baseUrl + "/create-invoice", {"user_id": user_id, "order_ids": order_ids, "name": name, "last_name": last_name, "delivery_address": delivery_address, "telephone_number": telephone_number, "price_all": price_all, "delivery_price": delivery_price, "final_price": final_price})
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const GetInvoicesDB = async (token: string, user_id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/invoices?user_id="+ user_id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const GetInvoiceDB = async (token: string, invoice_id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get(baseUrl + "/invoice?invoice_id="+ invoice_id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}
