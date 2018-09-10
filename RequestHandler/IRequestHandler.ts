export interface IRequestHandler {
    get(params: object): Promise<IResponse>;
    post(params: object): Promise<IResponse>;
    put(params: object): Promise<IResponse>;
    delete(params: object): Promise<IResponse>;
    cancel(): void;
}

export interface IResponse {
    response: object;
}