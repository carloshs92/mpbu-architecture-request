import {IRequestHandler, IResponse} from "./IRequestHandler";
import {default as Axios, AxiosInstance} from "axios";
import {URL} from "../environment";

export abstract class AxiosRequestHandler implements IRequestHandler {
    abstract api: string;
    static cancelToken = Axios.CancelToken.source();
    private instance: AxiosInstance;

    constructor() {
        this.instance = Axios.create({
            baseURL: URL
        })
    }

    cancel(message = ''): void {
        AxiosRequestHandler.cancelToken.cancel(message);
    }

    delete(params = {}): Promise<IResponse> {
        return this.instance.delete(this.api, {params: {}, cancelToken: AxiosRequestHandler.cancelToken.token}).then(() => {
            return {response: {}} as IResponse
        });
    }

    get(params = {}): Promise<IResponse> {
        return this.instance.get(this.api, {params: {}, cancelToken: AxiosRequestHandler.cancelToken.token}).then(() => {
            return {response: {}} as IResponse
        });
    }

    post(params = {}): Promise<IResponse> {
        return this.instance.post(this.api, params, { cancelToken: AxiosRequestHandler.cancelToken.token }).then(() => {
            return {response: {}} as IResponse
        });
    }

    put(params = {}): Promise<IResponse> {
        return this.instance.put(this.api, params, { cancelToken: AxiosRequestHandler.cancelToken.token }).then(() => {
            return {response: {}} as IResponse
        });
    }
}