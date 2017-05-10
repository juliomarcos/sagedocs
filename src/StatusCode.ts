export class StatusCode {
    code: number;
    constructor(code: number) {
        this.code = code;
    }

    public static readonly OK = new StatusCode(200);
}