export class Practice {
    code: string;
    name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    toString() {
        return `${this.name} - ${this.code}`;
    }
}
