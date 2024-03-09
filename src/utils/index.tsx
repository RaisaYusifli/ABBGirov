import { httpClient } from "httpClient"
import { IFormValues } from "pages/Create"

export interface IPladge {
    colletralCode: string
    customerCIF: string
    fullname: string
    customerPledge: {
        describe: string
        endDate: string
        pledgedCurrency: string
        pledgesValue: number
        startDate: string
    }
    data: {
        deposit: {
            branch: string
            currency: string
            reference: string
        }[]
        productCode: string
        questions: {
            key: keyof IFormValues
            value: string
            type: string
            maxLenght: number
            minLenght: number
            items: {
                key: string
                value: string
            }[]
        }[]
    }[]
}
export const fetchPledgesData = async (url: string): Promise<IPladge> => {
    const response: IPladge = await httpClient.get(url);
    return response;
};
export const postData = async (url = "", data = {}) => {
    const response = await httpClient.post(url, data);
    return response
}

export const editData = async (url = "", data = {}) => {
    const response = await httpClient.put(url, data);
    return response
}
