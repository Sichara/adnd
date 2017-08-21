import { RequestOptionsArgs, Response } from '@angular/http';

export interface HttpRequest {
    url: string;
    options: RequestOptionsArgs;
}

export interface ErrorMessage extends Response {
    _body: string;
}

export interface HttpOptions {
    cache?: boolean;
    reload?: boolean;
    hideNotifications?: boolean | number[];
}
