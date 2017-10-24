//const assert = require('chai').assert;

//const myApp = require('../src/main.js');

import { assert }from 'chai';
import rainDrops from '../src/main.js';


describe("rainDrops", () => {
   describe("rainDrops tests", () => {
       it("should return Plong for 28", () => {
           assert.equal(rainDrops(28), 'Plong');
       });
       it("should return 13 for 13", () => {
           assert.equal(rainDrops(13), 13);
       });
       it("should return PlingPlang for 1755", () => {
           assert.equal(rainDrops(1755), 'PlingPlang');
       });
        it("should return 34 for 34", () => {
           assert.equal(rainDrops(34), '34');
       });
        it("should return invalid input please input a number for ''", () => {
           assert.equal(rainDrops (''), 'invalid input please input a number');
       });
         it("should return invalid input please input a number for 0", () => {
           assert.equal(rainDrops(0), 'invalid input please input a number');
       });
       it("should return 4.6 for 4.6", () => {
           assert.equal(rainDrops(4.6), '4.6');
       });
       it("should return 34 for '34'", () => {
           assert.equal(rainDrops('34'), '34');
       });
       it("should return PlingPlangPlong for 105", () => {
           assert.equal(rainDrops(105), 'PlingPlangPlong');
       });
        it("should return invalid input please input a number for 'Hello'", () => {
           assert.equal(rainDrops('Hello'), 'invalid input please input a number');
       });
       it("should return Plang for 65", () => {
           assert.equal(rainDrops(65), 'Plang');
         });   
   })
})