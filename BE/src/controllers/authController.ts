import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class AuthController {
  // Register
  async signUp(req: Request, res: Response) {
    try {
      const response = await AuthServices.register(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //   Login
  async login(req: Request, res: Response) {
    try {
      const response = await AuthServices.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //   AuthCheck
  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await AuthServices.check(loginSession);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Error while getting check" });
    }
  }
}

export default new AuthController();
