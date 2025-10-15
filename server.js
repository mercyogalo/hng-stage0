const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const axios=require('axios');


const app=express();

app.use(cors());
dotenv.config();


const PORT=process.env.PORT || 5000;



app.get('/me', async (req, res)=>{

    try{
            
    const catResponse=await axios.get(`https://catfact.ninja/fact`, { timeout: 5000 });
    const catFact=catResponse.data.fact;
    console.log(catFact);

    const data={
        status:"Success",
        user: {
        email: "ogalomercy@gmail.com",
        name: "Mercy Ogalo",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(data);

    }catch(error){
     res.status(500).json({
        status: "error",
        message: "Failed to fetch cat fact.",
        timestamp: new Date().toISOString()
    });
    console.log("The error is ", error);

    }
    
    
    })


app.listen(PORT, ()=>{
    console.log(`Server running on port ${5000}`);
})

 
