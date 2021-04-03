import { App } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.SERVER_PORT);

function main() {
    const server = new App(port);
    server.listen();
    
}

main();