import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { loginSchema, userSchema } from "../utils/validator";

class AuthServices {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async register(reqBody: any): Promise<any> {
    try {
      const { error, value } = userSchema.validate(reqBody);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const isEmailRegistered = await this.authRepository.findOne({
        where: { email: value.email },
      });
      if (isEmailRegistered) {
        throw new Error("Email already registered.");
      }

      const hashedPassword = await bcrypt.hash(value.password, 10);

      const user = this.authRepository.create({
        username: value.username,
        first_name: value.first_name,
        last_name: value.last_name,
        email: value.email,
        password: hashedPassword,
      });

      await this.authRepository.save(user);
      return {
        message: "Registration successful!",
        user: user,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      const { error } = loginSchema.validate(reqBody);

      if (error) {
        throw new Error(error.details[0].message);
      }
      const user = await this.authRepository.findOne({
        where: { email: reqBody.email },
        select: [
          "id",
          "username",
          "first_name",
          "last_name",
          "email",
          "password",
        ],
      });

      if (!user) {
        throw new Error("Email not Found!");
      }

      const isPasswordValid = await bcrypt.compare(
        reqBody.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Wrong Password!");
      }

      // Membuat token JWT
      const token = jwt.sign(
        {
          user,
        },
        "secretKey",
        {
          expiresIn: "6h",
        }
      );
      return {
        message: "Succesfully logged in",
        user: {
          id: user.id,
          first_name: user.first_name,
          username: user.username,
          email: user.email,
        },
        token: token,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async check(loginSession: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
      });
      return {
        message: "Token is valid",
        user: {
          id: user.id,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        },

        // user: user,
      };
    } catch (err) {
      throw new Error("Token is not valid");
    }
  }
}

export default new AuthServices();
