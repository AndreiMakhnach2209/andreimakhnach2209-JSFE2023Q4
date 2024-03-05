import {
    ResponseEndpoint,
    ResponseMinorEndpoint,
    OptionsForLoader,
    ResponseEndpointTypes,
    Endpoint,
} from '../../types/index';
import { assertVariable } from '../../modules/assertions';
class Loader {
    constructor(
        private baseLink: string,
        private options: OptionsForLoader
    ) {}

    protected getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: OptionsForLoader },
        callback: <T extends ResponseEndpointTypes>(data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(response: Response): Response | never {
        if (!response.ok) {
            if (response.status === 401 || response.status === 404)
                console.log(`Sorry, but there is ${response.status} error: ${response.statusText}`);
            throw Error(response.statusText);
        }

        return response;
    }

    private makeUrl(options: OptionsForLoader, endpoint: string): string {
        const urlOptions: OptionsForLoader = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach((item) => {
            url += `${item[0]}=${assertVariable(item[1])}&`;
        });
        console.log(url.slice(0, -1));
        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: Endpoint,
        callback: <T extends ResponseEndpointTypes>(data: T) => void,
        options: OptionsForLoader = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((response: Response) => response.json())
            .then((data: ResponseEndpoint | ResponseMinorEndpoint) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
