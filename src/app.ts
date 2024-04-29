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

const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.url, req.method, req.hostname);
	next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
	try {
		res.send("Hello from World!");
	} catch (error) {
		next(error);
		// res.status(400).json({
		// 	success: false,
		// 	message: "Faild to get data",
		// });
	}
});

app.post("/", logger, (req: Request, res: Response) => {
	console.log(req.body);
	res.json({
		message: "Successfully recivied data",
	});
});

app.all("*", (req: Request, res: Response) => {
	res.status(400).json({
		success: false,
		message: "Route is not found",
	});
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	if(error){
    res.status(400).json({
      status: false,
      message: "Something went wrong"
    })
  };
});

export default app;
