let fs = require('fs');
import { assert, use, expect } from 'chai';
import chaiHtml = require("chai-html");
import Assertion = Chai.Assertion;

use(chaiHtml);

export function assertHtmlFileContentEqualHtmlString(expectation: string, path: string): Assertion {
    return expect(expectation).html.to.equal(fs.readFileSync(path).toString());
}

