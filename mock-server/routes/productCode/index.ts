import express from 'express';

const router = express.Router();


const productData = [
    {
        colletralCode:"99743",
        product:"CCL3"
    },
    {
        colletralCode:"99745",
        product:"CCL6"
    }
]







router.get('/product-code/:colletralCode', (req, res) => {
    const colletralCode = req.params.colletralCode
    const product = productData.find((p) => p.colletralCode === colletralCode )
    
    if(product)
    {
        res.json(product)
    }
   else{
    res.status(404).json({error:"user not found"})
   }
});

export default router;