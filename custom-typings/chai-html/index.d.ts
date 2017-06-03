declare namespace Chai {

    interface Assertion {
        html:LanguageChains;
    }

}

declare module 'chai-html' {
    function chaiHtml(chai: any, utils:any): void;
    export = chaiHtml;
}