# Sistema de Inventario

## Juan Pablo Tocino

Este proyecto es una aplicación frontend de sistema de inventario que permite gestionar productos, simular ventas y visualizar un historial de compras.

La aplicación incluye funcionalidades como alta, edición y eliminación de productos, búsqueda, carrito de compras y registro de ventas con persistencia en localStorage.

---

## 📌 Funcionalidades

- CRUD de productos (crear, editar, eliminar)
- Validación de formularios
- Búsqueda de productos
- Carrito de compras
- Finalizar ventas
- Historial de ventas
- Detalle de cada venta en modal
- Persistencia con localStorage

---


### Arquitectura

Se utilizó una arquitectura basada en componentes, separando la aplicación en:

- Vistas principales (Productos, Ventas, Historial)
- Componentes reutilizables (Navbar, Header, Tablas, Modales)
- Lógica central en cada vista con estado local

## 🧱 Tecnologías utilizadas

El proyecto fue desarrollado con:

- React: para la construcción de la interfaz basada en componentes.
- TypeScript: para tipado estático y mayor seguridad en el código.
- Vite: como bundler por su rapidez en desarrollo.
- CSS puro: para manejo manual de estilos sin dependencias externas.
- localStorage: para simular persistencia de datos sin backend.
---

## 🔄 Flujo de la aplicación

Productos → Ventas → Historial

---


## 🤖 Uso de herramientas de IA

Durante el desarrollo se utilizó inteligencia artificial (ChatGPT) como apoyo para:

- Diseño de arquitectura de componentes
- Refactorización de lógica en React
- Mejora de manejo de estado (carrito, ventas, historial)
- Optimización de código y buenas prácticas
- Asistencia en debugging de errores de TypeScript

## 💾 Persistencia de datos

- Productos guardados en localStorage
- Ventas guardadas en localStorage

---

## 🚀 Instalación y ejecución

Para correr el proyecto localmente:

```bash
npm install
npm run dev