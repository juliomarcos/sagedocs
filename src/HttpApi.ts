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
        return  `<header>\n` +
                `    <h1>${this.title} API</h1>\n` +
                `    <p>${this.description}</p>\n` +
                `</header>`
    }

    /**
     * Move to a HttpApiNavBuilder
     * @returns {string}
     */
    private nav() {
        let cache = ['<nav>'];
        for (let res of this.resources) {
            let resourceHtmlBuilder = new ResourceHtmlBuilder(res);
            cache.push('    ' + resourceHtmlBuilder.navLink())
        }
        cache.push('</nav>');
        return cache.join('\n');
    }

    public docs() {
        let cache = [
            this.header(),
            this.nav(),
        ];
        return cache.join('\n');
    }
}