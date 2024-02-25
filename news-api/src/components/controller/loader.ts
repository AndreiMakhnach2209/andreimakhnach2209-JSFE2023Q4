import { ResponseEndpoint, ResponseMinorEndpoint, OptionsForLoader } from '../../types/index';

class Loader {
    constructor(
        private baseLink: string | undefined,
        private options: OptionsForLoader
    ) {}

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options: OptionsForLoader },
        callback: <T>(data?: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: OptionsForLoader, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: <T>(data: T) => void, options: OptionsForLoader = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: ResponseEndpoint | ResponseMinorEndpoint) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
