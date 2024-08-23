import { makeAutoObservable } from 'mobx';

class RegisterStore {
    username = '';
    email = '';
    password = '';

    constructor() {
        makeAutoObservable(this);
    }

    setUsername(value) {
        this.username = value;
    }

    setEmail(value) {
        this.email = value;
    }

    setPassword(value) {
        this.password = value;
    }

    resetForm() {
        this.username = '';
        this.email = '';
        this.password = '';
    }
}

const registerStore = new RegisterStore();
export default registerStore;