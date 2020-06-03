const app = express();

app.use(express.static(__dirname+'/dist/proyectologin'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/proyectologin/index.html'));
});

app.listen(process.env.PORT || 8080);