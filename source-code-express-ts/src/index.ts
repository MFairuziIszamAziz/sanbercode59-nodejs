import express, { Request, Response } from "express";
import path from "path";

const PORT = 3000;

function init() {
  const app = express();
  const products = [
    { id: 1, name: "Laptop", category: "Elektronik" },
    { id: 2, name: "Meja", category: "Perabotan" },
  ];
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.get("/hello", (req, res) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });
  app.get("/user", (req, res) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@mail.com",
      },
    });
  });

  app.get("/api/product", (req, res) => {
    res.json(products);
  });

  app.get("/api/product/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (products) {
      res.json(product);
    } else {
      res.status(404).json;
    }
  });

  app.post("/api/product", (req, res) => {
    const { name, category } = req.body;
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name: name,
      category: category,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  app.put("/api/product/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const changeProduct = products.find((p) => p.id === productId);

    if (changeProduct) {
      changeProduct.name = req.body.name;
      res.json({
        data: changeProduct,
      });
    } else {
      res.status(404).json;
    }
  });

  app.delete("/api/product/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex !== -1) {
      products.splice(productIndex, 1);
    } else {
      res.status(404).json;
    }

    res.status(204).json;
  });

  app.get("/api/product", (req, res) => {
    const name = req.query.name as string;

    if (!name) {
      res.status(400).json;
    }

    const nameFilter = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    if (nameFilter.length > 0) {
      res.status(200).json(nameFilter);
    } else {
      res.status(404).json;
    }
  });

  app.get("/api/product/:category", (req, res) => {
    const { category } = req.params;
    const name = req.query.name as string;

    let filterCategory = products.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );

    if (name) {
      filterCategory = filterCategory.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (filterCategory.length > 0) {
      res.status(200).json(filterCategory);
    } else {
      res.status(400).json;
    }
  });

  app.use(express.static(path.join(__dirname, "public")));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
