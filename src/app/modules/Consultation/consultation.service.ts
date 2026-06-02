import { IConsultationRequest } from './consultation.interface';
import { Consultation } from './consultation.model';

const createConsultation = async (payload: IConsultationRequest) => {
  const result = await Consultation.create(payload);
  return result;
};

const getAllConsultations = async () => {
  const result = await Consultation.find({ isDeleted: false }).sort({ createdAt: -1 });
  return result;
};

export const ConsultationServices = {
  createConsultation,
  getAllConsultations,
};
