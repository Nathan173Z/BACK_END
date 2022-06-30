const categories = require('../models/Categories')



exports.findAll = async (req, res) => {
    await categories.findAll({
        attributes: ['name','id','description'],
        order:[['name','ASC']]

    })
    .then( (Categorias) =>{
        return res.json({
            erro:false,
            Categorias
        });
    }).catch( (err) => {
        return res.status(400).json({
            erro:true,
            mensagem:`Erro: ${err} ou Nenhuma categoria encontrada`
        })
    })
    
};

exports.findOne = async (req, res) =>{
    
    const {id} = req.params;
    try{
        const categorias = await categories.findByPk(id);
        if(!categorias){
            return res.status(400).json({
                erro:true,
                mensagem: "Erro: Nenhuma categoria encontrada"
            })
        }
        res.status(200).json({
            erro:false,
            categorias
        })
    } catch (err) {
        res.status(400).json({
            erro:true,
            mensagem: `Erro: ${err}`
        })
    }
};

exports.create = async (req, res) =>{
    const {name, id,  description } = req.body;
    await categories.create(req.body)
    .then( ()=>{
        return res.json({
            erro:false,
            mensagem: 'Categoria cadastrada com sucesso'
        });
    }).catch( (err)=>{
        return res.status(400).json({
            erro:true,
            mensagem: `Erro: Categoria não cadastrada... ${err}`
        })
    })
};

exports.update = async (req, res) =>{
    const { id } = req.body;

    await categories.update(req.body, {where: {id}})
    .then(()=> {
        return res.json({
            erro:false,
            mensagem: 'Categoria alterada com sucesso'
        })
    }).catch( (err)=>{
        return res.status(400).json({
            erro: true,
            mensagem: `Erro: Categoria não alterada ${err}`
        })
    })
};
    
exports.delete = async (req, res) => {
        const { id } = req.params;
        await categories.destroy({where: {id}})
        .then(() =>{
            return res.json({
                erro: false,
                mensagem: "Categoria deletada com sucesso"
            });
        }).catch((err) =>{
            return res.status(400).json({
                erro:true,
                mensagem: `Erro: ${err} Categoria não deletada`
            })
        })
};
