import {Resource} from "../Resource";
import {Docs} from "../Docs";
export class ResourceHtmlBuilder implements Docs {
    readonly resource:Resource;

    constructor(resource: Resource) {
        this.resource = resource;
    }

    private header() {
        return this.resource.name;
    }

    docs() {
        return `<h2>Resource ${this.header()}</h2>`;
    };
}