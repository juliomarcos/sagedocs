import {suite, test, slow, timeout} from "mocha-typescript";
import {assert} from 'chai';
import {Sage} from '../src/index';
import {Resource} from "../src/Resource";

@suite
class DevSandbox {
    @test world() {
        assert.equal(new Sage().be(), "Wise");
    }
}