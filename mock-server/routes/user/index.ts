import express from 'express';

const router = express.Router();



const customers = [
  { fullname:"Ismayil Hasanov Rashad",CIF:1234567, },
  { fullname:"Ferid Hasanov Rashad",CIF:7654321 },

];




router.get('/', (req, res) => {
res.json(customers);
});

router.get('/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/:customerId', (req, res) => {
  const customerId = parseInt(req.params.customerId);
  const customer = customers.find((customer) => customer.CIF === customerId )

  if(customer){
    res.json(customer)
  }
  else{
    res.status(404).json({error:"user not found"})
  }

  });


router.post('/',(req,res) =>  {

})

export default router;

