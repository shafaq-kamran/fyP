import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Product from '../frontend/src/components/Product.js';
const app = express();
mongoose.connect('mongodb://localhost/amazona', {
  useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
    const products = data.products.find(x => x._id == req.params.id);
    if (Product) {
        res.send(Product);

    } else {
        res.status(404).send({
            message: 'Product Not Found '
        })

    }

});
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.get('/', (req, res) => {
    res.send('server is ready');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port} `);
});
