import { IExpert } from './expert.interface';
import { Expert } from './expert.model';

const createExpertIntoDB = async (payload: IExpert) => {
  const result = await Expert.create(payload);
  return result;
};

const getAllExpertsFromDB = async (query: Record<string, unknown>) => {
  const result = await Expert.find(query);
  return result;
};

const getSingleExpertFromDB = async (id: string) => {
  const result = await Expert.findById(id);
  return result;
};

const updateExpertIntoDB = async (id: string, payload: Partial<IExpert>) => {
  const result = await Expert.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteExpertFromDB = async (id: string) => {
  const result = await Expert.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const ExpertServices = {
  createExpertIntoDB,
  getAllExpertsFromDB,
  getSingleExpertFromDB,
  updateExpertIntoDB,
  deleteExpertFromDB,
};
