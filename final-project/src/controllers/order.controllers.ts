// src/controllers/order.controller.ts
import { Request, Response } from "express";
import {
  createOrder,
  findAllOrders,
  findOrderById,
  updateOrderStatus,
  deleteOrder,
  userOrder,
} from "../services/order.services";

export default {
  async create(req: Request, res: Response) {
    /**
    #swagger.tags = ['Order']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/CreateOrderRequest"
      }
    }
    #swagger.responses[201] = {
      description: "Order created successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                $ref: "#/components/schemas/Order"
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
      const result = await createOrder(req.body);
      res.status(201).json({
        data: result,
        message: "Success create order",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create order",
      });
    }
  },

  async findAll(req: Request, res: Response) {
    /**
    #swagger.tags = ['Order']
    #swagger.responses[200] = {
      description: "Successfully retrieved all orders",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Order"
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
      const result = await findAllOrders();
      res.status(200).json({
        data: result,
        message: "Success get all orders",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all orders",
      });
    }
  },

  async findOne(req: Request, res: Response) {
    /**
    #swagger.tags = ['Order']
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
      description: "Successfully retrieved the order",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                $ref: "#/components/schemas/Order"
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
      const result = await findOrderById(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success get one order",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one order",
      });
    }
  },

  async update(req: Request, res: Response) {
    /**
    #swagger.tags = ['Order']
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
              status: {
                type: "string",
                example: "completed"
              }
            }
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: "Successfully updated the order status",
      content: {
        "application/json": {
          schema: {
            type: "object",
             properties: {
              data: {
                $ref: "#/components/schemas/Order"
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
      const result = await updateOrderStatus(req.params?.id, req.body.status);
      res.status(200).json({
        data: result,
        message: "Success update order status",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update order status",
      });
    }
  },

  async delete(req: Request, res: Response) {
    /**
    #swagger.tags = ['Order']
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
      description: "Successfully deleted the order",
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
      const result = await deleteOrder(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success delete order",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete order",
      });
    }
  },

  async getOrdersByUserId(req: Request, res: Response) {
    try {
      /**
    #swagger.tags = ['Order']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.parameters = [
      {
        name: "userId",
        in: "path",
        required: true,
        schema: {
          type: "string"
        }
      },
      {
        name: "page",
        in: "query",
        schema: {
          type: "integer",
          default: 1
        }
      },
      {
        name: "limit",
        in: "query",
        schema: {
          type: "integer",
          default: 10
        }
      }
    ]
    #swagger.responses[200] = {
      description: "Successfully retrieved user orders",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "array",
               items: {
                  $ref: "#/components/schemas/Order"
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
              message: {
                type: "string"
              }
            }
          }
        }
      }
    }
   */
      const { userId } = req.params;
      const page = parseInt(req.query.page as string) || 1; // Default ke halaman 1
      const limit = parseInt(req.query.limit as string) || 10; // Default ke limit 10

      const result = await userOrder(userId, page, limit);

      res.status(200).json({
        data: result,
        message: "Berhasil mendapatkan riwayat order pengguna",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        message: `Gagal mendapatkan riwayat order: ${err.message}`,
      });
    }
  },
};
