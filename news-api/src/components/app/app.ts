import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { form as searchForm } from '../elements/formElements/search';
import { container as categoriesForm } from '../elements/formElements/controllPanel';

class App {
    private controller = new AppController();
    private view = new AppView();

    constructor() {}

    public start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (event) => this.controller.getNews(event, (data) => this.view.drawNews(data)));
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.controller.getNews(event, (data) => this.view.drawNews(data));
        });
        categoriesForm.addEventListener('change', (event) => {
            this.controller.getSources(event, (data) => this.view.drawSources(data));
        });
        this.controller.getSources(null, (data) => this.view.drawSources(data));
    }
}

export default App;
