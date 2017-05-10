export class Resource {
    name: string;
    regularPartName: string;
    parent: Resource;

    constructor(name: string, regularPartName: string) {
        this.name = name;
        this.regularPartName = regularPartName;
    }

    public fullPath():string {
        return (this.parent != undefined ? this.parent.fullPath() : '') +
            "/" + this.regularPartName;
    }
}