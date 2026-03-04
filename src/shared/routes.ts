// API routes definition and validation schemas

import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

// Example route with validation schema
router.post('/example', [
    check('name').isString().notEmpty(),
    check('age').isInt({ min: 0 })
], (req, res) => {
    // Handle the request
    res.status(200).json({ message: 'Success' });
});

export default router;
