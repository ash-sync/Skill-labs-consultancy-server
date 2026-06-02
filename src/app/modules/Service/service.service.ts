import { IService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payload: IService) => {
  const service = await Service.create(payload);

  return service;
};

const getAllServices = async () => {
  const services = await Service.find({});

  return services;
};

const getServiceById = async (id: string) => {
  const service = await Service.findById(id);

  return service;
};

const updateService = async (id: string, payload: Partial<IService>) => {
  const service = await Service.findByIdAndUpdate(id, payload, { new: true });
  return service;
};

const deleteService = async (id: string) => {
  const service = await Service.findByIdAndDelete(id);
  return service;
};

export const ServiceService = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};