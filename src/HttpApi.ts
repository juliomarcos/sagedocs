import {Api} from "./Api";
import {Resource} from "./Resource";
import {ResourceHtmlBuilder} from "./html/ResourceHtmlBuilder";

export class HttpApi implements Api {

    title: string;
    description: string;
    resources: Array<Resource>;

    /**
     *
     * @param title
     * @param description
     * @param resources
     */
    constructor(title: string, description: string, resources: Array<Resource>) {
        this.title = title;
        this.description = description;
        this.resources = resources;
    }

    validate() {
        return true;
    };

    /**
     * Move to a HttpApiHeaderBuilder
     */
    private header() {
        return `<h1>${this.title} API</h1>\n` +
               `<p>${this.description}</p>`;
    }

    public docs() {
        let cache = [this.header()];
        for (let res of this.resources) {
            let resourceHtmlBuilder = new ResourceHtmlBuilder(res);
            cache.push(resourceHtmlBuilder.docs())
        }
        return cache.join('\n');
    }
}