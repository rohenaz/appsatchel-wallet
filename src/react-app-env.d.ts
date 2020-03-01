/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    REACT_APP_PLANARIA_API_KEY: string;
    REACT_APP_BIT_INDEX_API_KEY: string;
  }
}
declare module "bsv-satchel";
