import { makeAutoObservable } from 'mobx';

class ConfigStore {
    baseURL = 'http://localhost:8000'; 

    constructor() {
        makeAutoObservable(this);
    }

    setBaseURL(url) {
        this.baseURL = url;
    }

    getBaseURL() {
        return this.baseURL;
    }
}

const configStore = new ConfigStore();
export default configStore;