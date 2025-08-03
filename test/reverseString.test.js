

import assert from "assert"

import reverseString from "../src/reverseString.js"


describe("reverseString",()=>{
    it('should reverse "hello" to "olleh"',function(){
        assert.strictEqual(reverseString("hello"),"olleh");
    })

    it('should reverse empty string when input is empty',function(){
        assert.strictEqual(reverseString(""),"");
    })
})