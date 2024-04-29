import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

// routers

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
	const user = req.body;
	console.log(user);

	res.json({
		success: true,
		message: "User is created successfully",
		data: user,
	});
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
	const course = req.body;
	console.log(course);

	res.json({
		success: true,
		message: "Course is created successfully",
		data: course,
	});
});

// global error handler

app.all("*", (req: Request, res: Response) => {
	res.status(400).json({
		success: false,
		message: "Not found",
	});
});

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
