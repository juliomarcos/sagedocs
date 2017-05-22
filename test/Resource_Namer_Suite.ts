import {suite, test} from "mocha-typescript";
import {assert} from 'chai';
import {ResourceNamer} from "../src/helper/ResourceNamer";

@suite
class ResourceNamer_Test_Suite {

    @test Single_Word_Resouce_Name_Url_Friendly() {
        let urlName = ResourceNamer.nameInPath('User');
        assert.equal(urlName, 'user');
    }

    @test Two_Words_Resouce_Name_Url_Friendly() {
        let urlName = ResourceNamer.nameInPath('PatientData');
        assert.equal(urlName, 'patient-data');
    }

}