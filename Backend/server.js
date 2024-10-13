import express from "express";
import userRoute from "./routes/userRoute.js";
// import overviewRoute from "./routes/overviewRoute.js";
// import updateUserRoute from "./routes/updateUserRoute.js";
// import deleteUserRoute from "./routes/deleteUserRoute.js";

const port = 3000;
const app = express();

//Middleware
app.use(express.json());

app.use("/user", userRoute);
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Server hört auf port ${port}`);
});
