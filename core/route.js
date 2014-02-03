/**
 * Created by boooo on 14-2-2.
 */
module.exports=function(app){
    app.get('/',function(req,res){
        res.render('temperature',{
            pageTitle:'Home',
            pageContent:'Hello,Pi2UNO:)',
            layout:false
        });
    })

    app.get('/:id?',function(req,res){
        res.send(req.params.id);
    })
}
