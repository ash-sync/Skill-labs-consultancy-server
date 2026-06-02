import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ServiceService } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const body = { ...req.body };
  const payload = {
    ...body,
    ...(req.file && { icon: req.file.path }),
  };
  const service = await ServiceService.createService(payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service created successfully",
    data: service,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const services = await ServiceService.getAllServices();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Services fetched successfully",
    data: services,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const service = await ServiceService.getServiceById(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service fetched successfully",
    data: service,
  });
});

const updateService = catchAsync(async (req, res) => {
  const body = { ...req.body };
  const payload = {
    ...body,
    ...(req.file && { icon: req.file.path }),
  };
  const service = await ServiceService.updateService(req.params.id as string, payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service updated successfully",
    data: service,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const service = await ServiceService.deleteService(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service deleted successfully",
    data: service,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};