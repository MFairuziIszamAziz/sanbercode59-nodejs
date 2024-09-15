import { Request, Response } from "express";
import {
  create,
  findAll,
  findOne,
  update,
  remove,
} from "../services/categories.services";

export default {
  async create(req: Request, res: Response) {
    /**
    #swagger.tags = ['Categories']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.requestBody = {
      required: true,
      schema: {
      }
    }
    #swagger.responses[201] = {
      description: "Category created successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {ada error kyk gini tu kenapa ya?
Could not resolve reference: Could not resolve pointer: /components/schemas/Categories does not exist in document
isi mode category saya kyk gini
import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Category extends Document {
  name: string;
}

const CategoriesSchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model<Category>(
  "Categories",
  CategoriesSchema
);

export { CategoriesModel, Category };

              data: {
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
             properties: {
              data: {
                type: "string"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
    try {
      const result = await create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    /**
    #swagger.tags = ['Categories']
    #swagger.responses[200] = {
      description: "Successfully retrieved all categories",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                
                }
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
             data: {
                type: "string"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
    try {
      const result = await findAll();
      res.status(200).json({
        data: result,
        message: "Success get all categories",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all categories",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    /**
    #swagger.tags = ['Categories']
    #swagger.parameters = [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string"
        }
      }
    ]
    #swagger.responses[200] = {
      description: "Successfully retrieved the category",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
             properties: {
              data: {
                type: "string"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
    try {
      const result = await findOne(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success get one category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one category",
      });
    }
  },
  async update(req: Request, res: Response) {
    /**
    #swagger.tags = ['Categories']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.parameters = [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string"
        }
      }
    ]
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
                name: "string",  
            }
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: "Successfully updated the category",
      content: {
        "application/json": {
          schema: {
            type: "object",
             properties: {
              data: {
                
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "string"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
    try {
      const result = await update(req.params?.id, req.body);

      res.status(200).json({
        data: result,
        message: "Success update category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update category",
      });
    }
  },
  async delete(req: Request, res: Response) {
    /**
    #swagger.tags = ['Categories']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.parameters = [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string"
        }
      }
    ]
    #swagger.responses[200] = {
      description: "Successfully deleted the category",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "object",
                description: "Result of deletion"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "string"
              },
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
    try {
      const result = await remove(req.params?.id);

      res.status(200).json({
        data: result,
        message: "Success delete category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete category",
      });
    }
  },
};
