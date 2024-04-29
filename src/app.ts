import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from World!");
});

app.post("/", (req: Request, res: Response) => {
	console.log(req.body);
	res.json({
		message: "Successfully recivied data",
	});
});

export default app;
