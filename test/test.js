var assert = require("assert");
var Metalsmith = require("metalsmith");
var pdf = require("..");

describe('metalsmith-pdf', function(){
    it('should produce a .pdf file from an .html file', function(done){
        var metalsmith = Metalsmith(__dirname).use(pdf());
        metalsmith.build(function(err, files){
            assert(err == null);
            assert.ok(files['example.html']);
            assert.ok(files['example.pdf']);
            done();
        });
    });
});
