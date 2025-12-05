import express from "express";
import { Request, Response } from "express";
const app = express();
app.use(express.json());    

let usdc_quant = 100000;
let sol_quant= 500;
/*app.post("/add-liquidity",(req,res)=>{

})*/

app.post("/buy-asset",(req: Request, res: Response)=>{
    const quantity = Number(req.body.quantity);
    let updatedsol = sol_quant- quantity;
    let updatedusdc = sol_quant*usdc_quant/updatedsol;    // as the const remains same X*Y=updatedX*updatedY
    const paidamount = updatedusdc -usdc_quant;

    usdc_quant=updatedusdc; 
    sol_quant=updatedsol;
    res.json({
        message:  `you paid ${paidamount} usdc for ${quantity} of sol`
    })
    
})

app.post("/sell-asset",(req: Request, res: Response)=>{
    const quantity=Number(req.body.quantity);
    let updatedsol = sol_quant + quantity;
    let updatedusdc = sol_quant*usdc_quant/updatedsol   ;
    const gottenusdc = usdc_quant- updatedusdc;
        
    usdc_quant=updatedusdc;
    sol_quant=updatedsol;
    res.json({
        message:  `you got ${gottenusdc} usdc for ${quantity} of sol `
    })
    

})

app.post("/quote",(req: Request, res: Response)=>{

})

app.listen(3000);