import {suite, test, slow, timeout} from "mocha-typescript";
import {assert} from 'chai';
import {Resource} from "../src/Resource";

@suite
class Resource_Path_Name_Suite {

  @test Only_Unique_Verbs() {
      let user = new Resource('User');
      user.setAllowedVerbs('GET', 'GET', 'POST');
      let allowedVerbs = user.getAllowedVerbs();
      assert.lengthOf(allowedVerbs, 2);
      assert.include(allowedVerbs, 'GET');
      assert.include(allowedVerbs, 'POST');
  }

}