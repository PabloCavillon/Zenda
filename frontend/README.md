# 🌍 Zenda - Frontend

Zenda es una plataforma educativa y entretenida que funciona como una "Pokédex" de animales reales. Esta aplicación permite explorar animales, ver su ubicación en el mundo, conocer curiosidades, datos importantes y más.

Este repositorio contiene el **frontend** del proyecto, construido con **Next.js** + **TypeScript** + **TailwindCSS**.

---

## 🚀 Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-simple-maps](https://www.react-simple-maps.io/) para visualización geográfica
- [Axios](https://axios-http.com/) para consumo de APIs

---

## 🧑‍💻 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/PabloCavillon/Zenda.git
cd Zenda/frontend

# Instalar dependencias
npm install
```

---

## 🧪 Correr el servidor en desarrollo

```bash
npm run dev
```

El frontend estará disponible en:

```
http://localhost:3000
```

---

## 🌐 Arquitectura

```bash
src/
├── app/                      # Estructura por rutas (Next.js App Router)
│   ├── animals/              # Página de lista de animales
│   └── animals/[id]/         # Página de detalle de animal
├── components/               # Componentes reutilizables (Cards, Map, etc.)
├── services/                 # Módulos de conexión a la API (Axios)
├── types/                    # Interfaces TypeScript
└── styles/                   # Estilos globales
```

---

## 🗺️ Funcionalidades

- ✅ Listado de animales con imágenes y datos clave
- ✅ Página de detalle individual
- ✅ Mapa con ubicación del animal
- ✅ Curiosidades asociadas a cada especie
- 🔜 Juegos educativos (trivias, ordenar por extinción, etc.)
- 🔜 Búsqueda y filtros por tipo, peligrosidad, hábitat, etc.

---

## 📦 API

Este frontend consume los datos desde el backend Express del mismo proyecto:

🔗 [Repositorio del backend](https://github.com/PabloCavillon/Zenda/tree/main/backend)

Configurá la URL en `.env.local`
