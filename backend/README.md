# 🐾 Zenda API

Zenda es una API educativa que funciona como una "Pokédex" de animales reales y mitológicos. Su objetivo es ofrecer información clara y entretenida sobre las especies, incluyendo curiosidades, con potencial para juegos educativos y un zoológico virtual.

---

## 🚀 Tecnologías utilizadas

- **Node.js + Express**
- **TypeScript**
- **MongoDB + Mongoose**
- **Docker**
- **Jest + Supertest** (para tests)
- **Swagger** (documentación de endpoints)

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/PabloCavillon/Zenda.git
cd Zenda/backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/zenda_db
```

4. Levantar la base de datos con Docker:

```bash
docker run -d -p 27017:27017 --name zenda-mongo mongo
```

5. Iniciar el servidor:

```bash
npm run dev
```

---

## 📚 Documentación

Una vez iniciado, accedé a:

📌 [http://localhost:4000/api/docs](http://localhost:4000/api/docs)

---

## ✅ Endpoints principales

### 🔹 Animals

- `GET /api/animals` – Listar todos
- `GET /api/animals/:id` – Obtener por ID
- `POST /api/animals` – Crear nuevo
- `DELETE /api/animals/:id` – Eliminar

### 🔹 Curiosities

- `GET /api/curiosities` – Listar todas
- `GET /api/curiosities/by-animal/:animalId` – Por ID de animal
- `GET /api/curiosities/:id` – Obtener por ID
- `POST /api/curiosities` – Crear nueva
- `DELETE /api/curiosities/:id` – Eliminar

---

## 🧪 Correr los tests

```bash
npm run test
```

---

## 💡 Autor

**Pablo Cavillon**  
🐙 GitHub: [@PabloCavillon](https://github.com/PabloCavillon)

---

## 🛣️ Próximos pasos

- Sistema de autenticación con JWT
- Carga de imágenes reales
- Juegos educativos (ordenar por peligrosidad, extinción, etc.)
- Interfaz en Next.js

---

## ⭐ Licencia

Este proyecto es open source y libre de usar para fines educativos o de inspiración.
