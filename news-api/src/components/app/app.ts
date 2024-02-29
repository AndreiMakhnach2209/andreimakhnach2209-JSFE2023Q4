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
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.controller.getNews(e, (data) => this.view.drawNews(data));
        });
        categoriesForm.addEventListener('change', (e) => {
            this.controller.getSources(e, (data) => this.view.drawSources(data));
        });
        this.controller.getSources(null, (data) => this.view.drawSources(data));
    }
}

export default App;
