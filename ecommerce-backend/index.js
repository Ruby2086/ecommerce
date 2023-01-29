const bodyParser = require('body-parser');
const express = require ('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute')
const blogRouter = require('./routes/blogRoute')
const categoryRouter=require('./routes/productCategoryRoute')
const blogCategoryRouter = require('./routes/blogCategoryRoute')
const brandRouter = require('./routes/brandRoute')
const couponRouter = require('./routes/couponRoute')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require("cors");

dbConnect();


app.use(morgan("dev"));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

/*app.use("/", (req, res) => {
    res.send('Hello from the server side')
}) can be deleted, since create user have been created*/


app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/product-category", categoryRouter);
app.use("/api/blog-category", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
/**middleware must be after thw authRoyter */
app.use(notFound);
app.use(errorHandler);





app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`)
})