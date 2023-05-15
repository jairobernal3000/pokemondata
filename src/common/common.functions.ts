import { Logger } from "@nestjs/common";

const logger = new Logger();

export const showConsoleError = (functionName: string, msg: string, error: any ) => {
    logger.error(`[${functionName}]: ${msg}. ${JSON.stringify(error)}`);
}