import { signUpSchema, loginSchema } from '../validation';
import { getSingleUserByEmail } from '../services';

export const validateNewUserData = (req, res, next) => {
    try {
        const { error } = signUpSchema.validate(req.body);
        if (!error) {
            return next();
        }
        return res.status(400).json({
            status: 'Fail',
            message: error.message,
          });
    } catch (error) {
        return res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong',
          });
    }
};

export const checkIfUserAlreadyExists = async (req, res, next) => {
    try {
      const user = await getSingleUserByEmail(req.body.email);
      if (!user) {
        return next();
      }
      return res.status(409).json({
        status: 'Fail',
        message: 'This email already exists!',
      });
    } catch (error) {
        return res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong',
        }); 
    }
};

export const validateLoginData = (req, res, next) => {
  try {
      const { error } = loginSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({
          status: 'Fail',
          message: error.message,
      });
  } catch (error) {
      return res.status(500).json({
          status: 'Fail',
          message: 'Something went wrong',
      });
  }
};