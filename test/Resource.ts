import {suite, test, slow, timeout} from "mocha-typescript";
import {assert} from 'chai';
import {Resource} from "../src/Resource";

@suite
class Resource_Test_Suite {

    @test One_Level_Resource_Path() {
        let user = new Resource('User');
        assert.equal(user.fullPath(), '/user');
    }

    @test Two_Level_Resource_Path() {
        let user = new Resource('User');
        let comment = new Resource('HighBid');
        comment.parent = user;
        assert.equal(comment.fullPath(), '/user/high-bid');
    }

    @test Three_Level_Resource_Path() {
        let user = new Resource('User');
        let comment = new Resource('Comment');
        let attribution = new Resource('Attribution');
        comment.parent = user;
        attribution.parent = comment;
        assert.equal(attribution.fullPath(), '/user/comment/attribution');
    }

}