import { Router } from 'express';
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const router = Router();

router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);

// The :id part becomes req.params.id in the controller.
// Send DELETE /students/:id to the database-backed handler.
router.delete('/:id', deleteStudent);

export default router;