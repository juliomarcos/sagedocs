import { suite, test, slow, timeout } from "mocha-typescript";
import { assert } from 'chai';
import { Sage } from '../src/index';
import { Resource } from "../src/Resource";

@suite class DevSandbox {
    @test world() {
        assert.equal(new Sage().be(), "Wise");
    }

    @test oneLevelFullpath() {
        let user = new Resource('User', 'user');
        assert.equal(user.fullPath(), '/user');
    }

    @test twoLevelsFullPath() {
        let user = new Resource('User', 'user');
        let comment = new Resource('Comment', 'comment');
        comment.parent = user;
        assert.equal(comment.fullPath(), '/user/comment');
    }

    @test threeLevelsFullPath() {
        let user = new Resource('User', 'user');
        let comment = new Resource('Comment', 'comment');
        let attribution = new Resource('Attribution', 'attribution');
        comment.parent = user;
        attribution.parent = comment;
        assert.equal(attribution.fullPath(), '/user/comment/attribution');
    }
}