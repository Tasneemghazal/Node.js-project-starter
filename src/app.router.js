import connectDB from "../DB/connection.js";
import userRouter from "./modules/user/user.router.js";

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.get('/', (req, res)=>{
        return res.status(200).json({message:"success"});
    })
    app.use('/user',userRouter);
    
    app.use('*', (req, res)=>{
        return res.status(404).json({message:"page not found"});
    })

}

export default initApp;
 