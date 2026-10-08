const express = require("express");
const cors = require("cors");

const db = require("./data/database");
const productosRoutes = require("./routes/productos");
const categoriasRoutes = require("./routes/categorias");
const clientesRoutes = require("./routes/clientes");
const pedidosRoutes = require("./routes/pedidos");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API FashionStore funcionando correctamente",
        estado: "OK"
    });
});

// Rutas de la API
app.use("/api/productos", productosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/pedidos", pedidosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});