/**
 * Integration testing module.
 * Keep it minimal.
 */
import { suite, test, slow, timeout } from "mocha-typescript";
import { assert, use  } from 'chai';
import { Resource } from "../src/Resource";
import { HttpApi } from "../src/HttpApi";
import chaiFs = require("chai-fs");

use(chaiFs);

@suite
class Test_Http_Api {

    @test One_Restful_Resource_HTML_Gen() {
        let user = new Resource('User');
        let api = new HttpApi('Commenting', 'Used by ACME app to host users comments. Has token based authentication.', [
            user
        ]);

        assert.fileContent('./test/html/sample-header.html', api.docs(), 'sample header');
        // assert.equal(
        //     `<h1>Commenting API</h1>` +
        //     `<p>Used by ACME app to host users comments. Has token based authentication.</p>` +
        //     `<h2>Resource User</h2>`
        //     , api.docs());
    }

}