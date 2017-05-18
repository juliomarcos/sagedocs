import {ResourceNamer} from "./helper/ResourceNamer";

export class Resource {
    name: string;
    regularPartName: string;
    parent: Resource;

    /**
     * Use when this resource can be
     * accessed with an ID, e.g. /user/:userId
     */
    indexable: boolean;

    constructor(name: string) {
        this.name = name;
        this.regularPartName = ResourceNamer.nameInPath(name);
    }

    public fullPath():string {
        return (this.parent != undefined ? this.parent.fullPath() : '') +
            "/" + this.regularPartName;
    }
}