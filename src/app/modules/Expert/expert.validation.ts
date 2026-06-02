import { z } from 'zod';

const createExpertValidationSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  role: z.string({ message: 'Role is required' }),
  image: z.string().optional(),
  description: z.string({ message: 'Description is required' }),
  category: z.enum(['Meet Our Experts', 'Our Global Consultants'], { message: 'Category is required' }),
  tags: z.array(z.string()).optional(),
});

const updateExpertValidationSchema = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  category: z.enum(['Meet Our Experts', 'Our Global Consultants']).optional(),
  tags: z.array(z.string()).optional(),
});

export const ExpertValidations = {
  createExpertValidationSchema,
  updateExpertValidationSchema,
};
