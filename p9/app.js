const express = require('express');
const {engine} = require('express-handlebars');

const app = express();

const User = require('./models/User');
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('list-users');
});

app.get('/add-user', (req, res) => {
    res.render('add-user');
});

app.post('/add-user', async (req, res) => {
    var dados = req.body;
    await User.create(dados)
    .then( () =>{
        
        res.redirect('/');
    }).catch( (err)  =>{
        return res.status(400).json({
            erro: true,
            mensagem: `Erro: Usuário não cadastrado - ${err}` 
        });
    });
        
        
    
});

;

app.listen(3333);