import cors from 'cors';
import Express  from 'express'; 
import { routes } from './routes';
const app = Express();

//in production pass the origin of the frontend that go to access the application
    //origin: 'http://localhost:3000'
app.use(cors());
app.use(Express.json());
app.use(routes);


app.listen(3333, () => console.log(`Server is running!`))