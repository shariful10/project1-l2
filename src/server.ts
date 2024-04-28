import { Server } from "http";
import app from "./app";

const PORT = 5000;
let server: Server;

const bootstrap = async () => {
	server = app.listen(PORT, () => {
		console.log(`App listening on port: ${PORT}`);
	});
};

bootstrap();