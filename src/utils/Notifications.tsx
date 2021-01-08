import { notification } from "antd";

export function successMessage(message: string, description: string) {
    notification['success']({
        message,
        description,
        placement: 'bottomRight'
      });
}

export function errorMessage(message: string, description: string) {
    notification['error']({
        message, 
        description,
        placement: 'bottomRight'
    })
}


export function infoMessage(message: string, description: string) {
    notification['info']({
        message, 
        description,
        placement: 'bottomRight'
    })
}

export function isEmpty(obj: any): boolean {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}
