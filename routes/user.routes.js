import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res) => res.send({title: 'GET all users'}));

userRouter.get('/:id',(req,res) => res.send({title: 'GET user Details '}));

userRouter.post('/', (req,res) => res.send({title: 'CREATE New Users'}));

userRouter.put('/:id', (req,res) => res.send({title: 'UPDATE user'}));

userRouter.delete('/id:', (req,res) => res.send({title: 'DELETE user'}));

export default userRouter;