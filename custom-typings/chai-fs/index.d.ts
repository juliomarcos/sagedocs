// Type definitions for chai-fs

/// <reference types="chai" />

declare namespace Chai {

    interface AssertStatic {
        fileContent(path:any, data:any, msg:string): Assertion;
    }

}

declare module 'chai-fs' {
    function chaiFs(chai: any, utils:any): void;
    export = chaiFs;
}