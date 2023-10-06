import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import supplier_Route from './routes/supplier.routes.js';
import shopping_Route from './routes/shopping.router.js';
import detailShopping_Route from './routes/detail_shopping.routes.js'
import authRoutes from './routes/auth.routes.js' 
import taskRoutes from './routes/tasks.routes.js'

const app = express();

app.use(cors({
    Credential : true,
    origin: '*'
})); 
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",taskRoutes);
app.use("/api", supplier_Route)
app.use("/api", shopping_Route)
app.use("/api", detailShopping_Route)

  

export default app;