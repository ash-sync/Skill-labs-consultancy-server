import {
  TErrorSources,
  TGenericErrorResponse,
} from "../interfaces/error.type";


export const handleZodError = (err: any): TGenericErrorResponse => {
  console.error("Zod validation error:", err); // Log the entire error for debugging
  const errorSources: TErrorSources[] = [];


  err.issues.forEach((issue: any) => {
    errorSources.push({


      path: issue.path[issue.path.length - 1],
      message: issue.message,
    });
  });

  return {
    statusCode: 400,
    message: "Zod Error",
    errorSources,
  };
};
