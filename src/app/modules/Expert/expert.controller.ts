import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ExpertServices } from './expert.service';

const createExpert = catchAsync(async (req: Request, res: Response) => {
  console.log('Received expert data:', req.body, 'file:', req.file);
  let fileUrl = '';
  if (req.file) {
    fileUrl = (req.file as any).path;
  }

  const expertData = {
    ...req.body,
    image: fileUrl || req.body.image,
  };
  console.log('Final expert data to be saved:', expertData);

  const result = await ExpertServices.createExpertIntoDB(expertData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Expert created successfully',
    data: result,
  });
});

const fetchAlExperts = catchAsync(async (req: Request, res: Response) => {
  const result = await ExpertServices.getAllExpertsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experts fetched successfully',
    data: result,
  });
});

const getSingleExpert = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExpertServices.getSingleExpertFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expert fetched successfully',
    data: result,
  });
});

const updateExpert = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  let fileUrl = '';
  if (req.file) {
    fileUrl = (req.file as any).path;
  }

  const expertData = {
    ...req.body,
  };
  if (fileUrl) {
    expertData.image = fileUrl;
  }

  const result = await ExpertServices.updateExpertIntoDB(id as string, expertData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expert updated successfully',
    data: result,
  });
});

const deleteExpert = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExpertServices.deleteExpertFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expert deleted successfully',
    data: result,
  });
});

export const ExpertControllers = {
  createExpert,
  fetchAlExperts,
  getSingleExpert,
  updateExpert,
  deleteExpert,
};
