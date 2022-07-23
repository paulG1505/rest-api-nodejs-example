import { Router } from 'express';
import { getTasks,getTask,getTasksCount,saveTask,deleteTask,updateTask } from '../controllers/task';


const router = Router();


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */


/**
 * @swagger 
 * /tasks:
 *   get:
 *     summary: Get All Tasks
 *     description: Prueba
 */
router.get('/tasks',getTasks);

/**
 * @swagger 
 * /tasks/count:
 *  get:
 *      summary: Get Numbers of Tasks
 */
router.get('/tasks/count',getTasksCount);

/**
 * @swagger 
 * /tasks/:id:
 *  get:
 *      summary: Get Taks by ID
 */
router.get('/tasks/:id',getTask)

/**
 * @swagger 
 * /tasks:
 *  post:
 *      summary: Create new Task
 */
router.post('/tasks',saveTask);

/**
 * @swagger 
 * /tasks/:id:
 *  delete:
 *      summary: Delete task by ID
 */
router.delete('/tasks/:id',deleteTask);

/**
 * @swagger 
 * /tasks/:id:
 *  put:
 *      summary: Update Task
 */
router.put('/tasks/:id',updateTask)

export default router;