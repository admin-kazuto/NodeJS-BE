import productRouter from "./productRouter";

export default function routes(app){
    app.get("/",(req,res)=> {
        res.send({message:"sever đang hoạt động"});
    });
    app.use("/products",productRouter)
    app.use("/categor",categoryRouter) // chưa thêm nên chưa có
}