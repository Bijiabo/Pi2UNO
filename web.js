/**
 * Created by boooo on 14-2-2.
 */
var express = require('express');

var app = express();
app.get('/',function(req,res){
    res.send('hello,Pi2UNO');
})
app.listen(9000);
