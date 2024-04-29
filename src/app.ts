import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

// routers

const userRouter = express.Router();

const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.url, req.method, req.hostname);
	next();
};

app.get("/", logger, (req: Request, res: Response) => {
	res.send("Hello from World!");
});

app.post("/", logger, (req: Request, res: Response) => {
	console.log(req.body);
	res.json({
		message: "Successfully recivied data",
	});
});

export default app;
