import {ResourceNamer} from "./helper/ResourceNamer";
import {Verb} from "./Verb";

export class Resource {
    /**
     * Descriptive name of this resource.
     */
    name: string;

    /**
     * Name used in the URL path.
     */
    regularPartName: string;

    /**
     * Resource parent (if any).
     */
    parent: Resource;

    /**
     * Use when this resource can be
     * accessed with an ID, e.g. /user/:userId
     */
    indexable: boolean;

    /**
     * Will generate RESTful http calls.
     */
    restful: boolean;

    /**
     * What verbs are allowed to be used with this resource.
     */
    private allowedVerbs: Array<Verb>;

    /**
     * If this is defined then it's
     * going to override the default naming of
     * indexable partNames.
     */
    private _indexName: string;

    constructor(name: string) {
        this.name = name;
        this.regularPartName = ResourceNamer.nameInPath(name);
        this.restful = true;
        this.allowedVerbs = [];
    }

    set indexName(indexName: string) {
        this.indexable = true;
        this._indexName = indexName;
    }

    get indexName(): string {
        return this._indexName;
    }

    private getIndexablePartName() {
        if (this._indexName === undefined) {
            return `${this.regularPartName}Id`
        } else {
            return this._indexName;
        }
    }

    private path(isRoot: boolean): string {
        return (this.parent != undefined ? this.parent.path(false) : '') +
            "/" + this.regularPartName + ((isRoot) || (!isRoot && this.indexable) ? `/{${this.getIndexablePartName()}}` : '');
    }

    public setAllowedVerbs(...verbs:Verb[]) {
        this.allowedVerbs = this.allowedVerbs.concat(verbs);
        this.allowedVerbs = this.allowedVerbs.filter((v, i, arr) => arr.indexOf(v) == i); // removes duplicates
    }

    public getAllowedVerbs() {
        return this.allowedVerbs;
    }

    public rootPath(): string {
        return this.path(false);
    }

    public childPath(): string {
        return this.path(true);
    }
}