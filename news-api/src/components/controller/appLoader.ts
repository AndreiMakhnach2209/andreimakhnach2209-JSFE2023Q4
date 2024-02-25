import Loader from './loader';
import { assertVariable } from '../../modules/assertions';

class AppLoader extends Loader {
    constructor() {
        super(assertVariable(process.env.API_URL, 'Invalid URL'), {
            apiKey: assertVariable(process.env.API_KEY, 'Error API Key'),
        });
    }
}

export default AppLoader;
