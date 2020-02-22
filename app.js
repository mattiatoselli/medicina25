const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/', router);
app.use(express.static('public/'), express.static(path.join(__dirname, 'public')))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/pinerolo',function(req,res){
  res.sendFile(path.join(__dirname+'/pinerolo.html'));
});


app.listen(3002);

console.log('Running at Port 3002');
