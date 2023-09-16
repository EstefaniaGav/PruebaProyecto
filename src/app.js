import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import supplier_Route from './routes/supplier.routes.js';
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

export default app;