const express = require('express')

const app = express();

app.get('/api/customers',(req,res)=> {
    const customers = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Teresa'},
        {id: 3, name: 'Fuenzalida'},
    ]

    res.json(customers)
})

const port = 5000;

app.listen(port,()=> console.log(`Server starter on ${port}`))