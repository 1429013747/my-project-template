const devBaseURL = "dev-blue";
const proBaseURL = "pro-blue";
console.log(process.env.NODE_ENV);
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 10000;
