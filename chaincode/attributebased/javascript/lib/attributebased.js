/* eslint-disable no-constant-condition */
/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';
//import {subjectAttribute} from './lib/data/policy.json';
const { Contract } = require('fabric-contract-api');
const NodeAbac = require('node-abac');
const path = require('path');
const fs = require('fs');
const subjectAttribute = require('./data/subject');
const resourceAttribute = require('./data/resource');
//conect to policy data file
const policyDataPath = path.join(process.cwd(), './lib/data/policy.json');
const policyDataJson = fs.readFileSync(policyDataPath, 'utf8');

class AttributeBased extends Contract {
    // Initialize ledger
    async initLedger(ctx) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.info('============= START : Initialize Ledger ===========');
        await ctx.stub.putState('initPolicy', JSON.stringify(policyDataJson));
        await ctx.stub.putState('initSubject', JSON.stringify(subjectAttribute));
        await ctx.stub.putState('initResource', JSON.stringify(resourceAttribute));
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
        console.info('============= START : Initialize Ledger ===========');    
=======
        console.info('============= START : Initialize Ledger ===========');
>>>>>>> 413ff49... Add web application
        await ctx.stub.putState('initPolicy', JSON.stringify(policyDataJson));
        await ctx.stub.putState('initSubject', JSON.stringify(subjectAttribute));
        await ctx.stub.putState('initResource', JSON.stringify(resourceAttribute));
>>>>>>> f8ddfe2... init ledger
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests

=======
>>>>>>> 575eb43... resolved conflicts
        console.info('============= END : Initialize Ledger ===========');
    }

    //Store subject attributes on the legder
    async recordSubject(ctx, subjectKey, subject) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys = [];
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
>>>>>>> be638c3... eslint
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
=======

        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys = [];
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys = [];
>>>>>>> 575eb43... resolved conflicts
        while (true) {
            const res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                const Key = res.value.key;
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                break;
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        allKeys.forEach(element=> {if (element===subjectKey)
=======
        allKeys.forEach(element=> {if (element === subjectKey)
>>>>>>> 575eb43... resolved conflicts
        {
            throw new Error(`${subjectKey} is already exist you can update subject attribute using UpdateSubject function`);
        }
        });
        try{
            console.info('============= START : Record subjects attribute ===========');
            await ctx.stub.putState(subjectKey, JSON.stringify(subject));
            return `Transaction successfully submitted! The ${subjectKey} attributes are recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
<<<<<<< HEAD
=======
>>>>>>> 13b1e4c... merge pull requests

<<<<<<< HEAD
        allKeys.forEach(element=> {if (element == subjectKey)
=======
        allKeys.forEach(element=> {if (element===subjectKey)
>>>>>>> be638c3... eslint
        {throw new Error(`${subjectKey} is already exist you can update subject attribute using UpdateSubject function`);
=======
        allKeys.forEach(element=> {if (element===subjectKey)
        {
            throw new Error(`${subjectKey} is already exist you can update subject attribute using UpdateSubject function`);
>>>>>>> 413ff49... Add web application
        }
        });
<<<<<<< HEAD
        try{
            console.info('============= START : Record subjects attribute ===========');
            await ctx.stub.putState(subjectKey, JSON.stringify(subject));
            return `Transaction successfully submitted! The ${subjectKey} attributes are recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
=======

        console.info('============= START : Record subjects attribute ===========');
        await ctx.stub.putState(subjectKey, JSON.stringify(subject));
        return 'successfully submitted!';
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    //Update the existing resource attributes
    async updateSubject(ctx, subjectKey, newSubject){
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        try{
            console.info('============= START : Record subject attribute ===========');
            await ctx.stub.putState(subjectKey, JSON.stringify(newSubject));
            return `Transaction successfully submitted! The ${subjectKey} attributes are updated.`;
        }
        catch(err){
            console.error(err);
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        console.info('============= START : Record subject attribute ===========');
        await ctx.stub.putState(subjectKey, JSON.stringify(newSubject));
        return 'successfully submitted!';
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    //Record policy
    async recordPolicy(ctx, policyKey, policy) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
        while (true) {
            const res = await iterator.next();
=======
>>>>>>> 13b1e4c... merge pull requests

=======
>>>>>>> 575eb43... resolved conflicts
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys = [];
        while (true) {
            const res = await iterator.next();
<<<<<<< HEAD

<<<<<<< HEAD
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
        while (true) {
            const res = await iterator.next();
>>>>>>> be638c3... eslint
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
            if (res.value && res.value.value.toString()) {
                const Key = res.value.key;
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                break;
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        allKeys.forEach(element=> {if (element===policyKey)
        {throw new Error(`${policyKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(policyKey, JSON.stringify(policy));
            return `Transaction successfully submitted! The ${policyKey} is recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
=======
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts

        allKeys.forEach(element=> {if (element === policyKey)
        {throw new Error(`${policyKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });

=======
        allKeys.forEach(element=> {if (element===policyKey)
        {throw new Error(`${policyKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });
<<<<<<< HEAD
>>>>>>> be638c3... eslint
        console.info('============= START : Record attribute ===========');
        await ctx.stub.putState(policyKey, JSON.stringify(policy));
        return 'successfully submitted!';
<<<<<<< HEAD
<<<<<<< HEAD
=======
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(policyKey, JSON.stringify(policy));
            return `Transaction successfully submitted! The ${policyKey} is recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
>>>>>>> 413ff49... Add web application
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    //Update existing policy
    async updatePolicy(ctx, policyKey, newPolicy) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(policyKey, JSON.stringify(newPolicy));
            return `Transaction successfully submitted! The ${policyKey} is updated.`;
        }
        catch(err){
            console.error(err);
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        console.info('============= START : Record attribute ===========');
        await ctx.stub.putState(policyKey, JSON.stringify(newPolicy));
        return 'successfully submitted!';
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    // Record resourses attributes
    async recordResource(ctx, resourceKey, resource) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
        while (true) {
            const res = await iterator.next();
=======
>>>>>>> 13b1e4c... merge pull requests

=======
>>>>>>> 575eb43... resolved conflicts
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys = [];
        while (true) {
            const res = await iterator.next();
<<<<<<< HEAD

<<<<<<< HEAD
=======
        const iterator = await ctx.stub.getStateByRange('','');
        const allKeys=[];
        while (true) {
            const res = await iterator.next();
>>>>>>> be638c3... eslint
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
            if (res.value && res.value.value.toString()) {
                const Key = res.value.key;
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                break;
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        allKeys.forEach(element=> {if (element===resourceKey)
=======
        allKeys.forEach(element=> {if (element === resourceKey)
>>>>>>> 575eb43... resolved conflicts
        {throw new Error(`${resourceKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(resourceKey, JSON.stringify(resource));
            return `Transaction successfully submitted! The ${resourceKey} attributes are recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
<<<<<<< HEAD
=======
>>>>>>> 13b1e4c... merge pull requests

        allKeys.forEach(element=> {if (element === resourceKey)
        {throw new Error(`${resourceKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });

=======
        allKeys.forEach(element=> {if (element===resourceKey)
        {throw new Error(`${resourceKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });
<<<<<<< HEAD
>>>>>>> be638c3... eslint
        console.info('============= START : Record attribute ===========');
        await ctx.stub.putState(resourceKey, JSON.stringify(resource));
        return 'successfully submitted!';
<<<<<<< HEAD
=======
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(resourceKey, JSON.stringify(resource));
            return `Transaction successfully submitted! The ${resourceKey} attributes are recorded on the ledger`;
        }
        catch(err){
            console.error(err);
        }
>>>>>>> 413ff49... Add web application
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    //update existing resource attributes
    async updateResource(ctx, resourceKey, newResource) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        try{
            console.info('============= START : Record attribute ===========');
            await ctx.stub.putState(resourceKey, JSON.stringify(newResource));
            return `Transaction successfully submitted! The ${resourceKey} attributes are updated.`;
        }
        catch(err){
            console.error(err);
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        console.info('============= START : Record attribute ===========');
        await ctx.stub.putState(resourceKey, JSON.stringify(newResource));
        return 'successfully submitted!';
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
    }

    // Policy Decision Point (PDP)
    async PDP (ctx, subjectKey, resourceKey, rule, policyKey){
        let policyBytes = await ctx.stub.getState(policyKey);
        if (!policyBytes || policyBytes.length === 0){
            throw new Error(`${policyKey} does not exist`);
        }
        let policy = policyBytes.toString();
        console.log(policy);
        let policyParsed = JSON.parse(policy);
        console.log(policyParsed);
<<<<<<< HEAD
=======
<<<<<<< HEAD
        console.log(policy);
        let policyParsed = JSON.parse(policy);
        console.log(policyParsed);
=======
        let policyParsed = JSON.parse(policy);
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        while (typeof policyParsed === 'string'){
            policyParsed = JSON.parse(policyParsed);
        }
        const Abac = new NodeAbac(policyParsed);
        let subjectBytes = await ctx.stub.getState(subjectKey);
        if (!subjectBytes || subjectBytes.length === 0){
            throw new Error(`${subjectKey} does not exist`);
        }
        let subject = subjectBytes.toString();
        let subjectParsed = JSON.parse(subject);
<<<<<<< HEAD
<<<<<<< HEAD
        while(typeof subjectParsed === 'string'){
            subjectParsed = JSON.parse(subjectParsed);
<<<<<<< HEAD
<<<<<<< HEAD
=======
        while(typeof subjectParsed == 'string'){
=======
        while(typeof subjectParsed === 'string'){
>>>>>>> 413ff49... Add web application
            subjectParsed=JSON.parse(subjectParsed);
>>>>>>> be638c3... eslint
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        }
        let resourceBytes = await ctx.stub.getState(resourceKey);
        if (!resourceBytes || resourceBytes.length === 0){
            throw new Error(`${resourceKey} does not exist`);
        }
        let resourceParsed = JSON.parse(resourceBytes.toString());
<<<<<<< HEAD
<<<<<<< HEAD
        while(typeof resourceParsed === 'string'){
            resourceParsed = JSON.parse(resourceParsed);
        }
        const permit = Abac.enforce(rule, subjectParsed, resourceParsed);
        return `The result of access permission is ====> ${permit}`;
    }

    //Query subject or resource attributes based on their keys
    async queryAttribute(ctx, key) {
<<<<<<< HEAD
=======
            resourceParsed = JSON.parse(resourceParsed);
        }
        return Abac.enforce(rule, subjectParsed, resourceParsed);
    }
    //Query specific subject's attribute based on subjectKey
    async queryUserAttribute(ctx, key) {

<<<<<<< HEAD
=======
        while(typeof resourceParsed== 'string'){
=======
        while(typeof resourceParsed === 'string'){
>>>>>>> 413ff49... Add web application
            resourceParsed=JSON.parse(resourceParsed);
        }
        const permit = Abac.enforce(rule, subjectParsed, resourceParsed);
        return `The result of access permission is ====> ${permit}`;
    }
<<<<<<< HEAD
    //Query specific subject's attribute based on subjectKey
    async queryUserAttribute(ctx, key) {
>>>>>>> be638c3... eslint
=======

    //Query subject or resource attributes based on their keys
    async queryAttribute(ctx, key) {
>>>>>>> 413ff49... Add web application
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        let attributeBytes = await ctx.stub.getState(key);
        if (!attributeBytes || attributeBytes.length === 0){
            throw new Error(`${key} does not exist`);
        }
        let attribute = JSON.parse(attributeBytes);
        console.info ('this is attributeBytes:', attributeBytes);
        console.info('this is my attribute');
        return attribute;
    }

    // Query recorded policy
    async queryPolicies(ctx, key) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> be638c3... eslint
=======
=======

>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
        let policyBytes = await ctx.stub.getState(key);
        if (!policyBytes || policyBytes.length === 0){
            throw new Error(`${key} does not exist`);
        }
        let policy = JSON.parse(policyBytes.toString());
        console.info ('this is attributeBytes:', policyBytes);
        console.info('this is my attribute');
        console.log(typeof policy);
        return policy;
    }

    //Query all data
    async queryAll(ctx) {
        const iterator = await ctx.stub.getStateByRange('','');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const allResults=[];
        const allKeys=[];
=======
>>>>>>> 13b1e4c... merge pull requests

<<<<<<< HEAD
        const allResults = [];
        const allKeys = [];
<<<<<<< HEAD
=======
=======
>>>>>>> 413ff49... Add web application
        const allResults=[];
        const allKeys=[];
>>>>>>> be638c3... eslint
=======
>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
        const allResults = [];
        const allKeys = [];
>>>>>>> 575eb43... resolved conflicts
        while (true) {
            const res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));
                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                }
                catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> be638c3... eslint
=======
=======

>>>>>>> f343795218c7a1444b0be84c27a602f14a9a3ae3
>>>>>>> 13b1e4c... merge pull requests
=======
>>>>>>> 575eb43... resolved conflicts
}

module.exports = AttributeBased;
