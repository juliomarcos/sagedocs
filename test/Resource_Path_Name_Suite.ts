import {suite, test, slow, timeout} from "mocha-typescript";
import {assert} from 'chai';
import {Resource} from "../src/Resource";

@suite
class Resource_Test_Suite {

    @test One_Level_Resource_Path() {
        let user = new Resource('User');
        assert.equal(user.rootPath(), '/user');
    }

    @test Two_Level_Resource_Path() {
        let user = new Resource('User');
        let comment = new Resource('HighBid');
        comment.parent = user;
        assert.equal(comment.rootPath(), '/user/high-bid');
    }

    @test Three_Level_Resource_Path() {
        let user = new Resource('User');
        let comment = new Resource('Comment');
        let attribution = new Resource('Attribution');
        comment.parent = user;
        attribution.parent = comment;
        assert.equal(attribution.rootPath(), '/user/comment/attribution');
    }

    @test Indexable_Resource_Implicit_Name() {
        let user = new Resource('User');
        user.indexable = true;
        assert.equal(user.childPath(), '/user/{userId}')
    }

    @test Indexable_Resource_Two_Levels_Implicit_Name() {
        let user = new Resource('User');
        let order = new Resource('Order');
        user.indexable = true;
        order.indexable = true;
        order.parent = user;
        assert.equal(order.childPath(), '/user/{userId}/order/{orderId}')
    }

    @test Indexable_Resource_Four_Levels_Mixed_Implicit_Name() {
        let user = new Resource('User');
        user.indexable = true;

        let order = new Resource('Order');
        order.indexable = true;

        let status = new Resource('Status');

        let messsage = new Resource('Message');
        messsage.indexable = true;

        order.parent = user;
        status.parent = order;
        messsage.parent = status;

        assert.equal(messsage.childPath(), '/user/{userId}/order/{orderId}/status/message/{messageId}')
    }

    @test Indexable_Resource_Override_Name() {
        let download = new Resource('Download');
        download.indexName = 'download-code';

        assert.equal(download.childPath(), '/download/{download-code}');
    }

}