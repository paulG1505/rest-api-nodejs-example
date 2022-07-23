import express from 'express';
import tasksRoutes from './routes/task'
import cors from 'cors'
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions'

const specs = swaggerJSDoc(options)
const app = express();


app.use(cors());
app.use(morgan("dev"));
//para que pueda comprender los json 
app.use(express.json());
app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;