# Emia App Web (Frontend)

Pequeña aplicación en React + TypeScript para manejar tareas, consumiendo la API de Emia.

## Cómo funciona

- Permite agregar nuevas tareas escribiendo un título y presionando el botón de "Agregar".
- Muestra la lista de tareas existentes obtenidas desde la API.
- Cada tarea tiene una columna "Completada":
  - Si está marcada con una "X", significa que la tarea está pendiente.
  - Al hacer clic sobre la "X", cambiará a un "✓" (tick), indicando que la tarea se completó.
- Las actualizaciones se sincronizan automáticamente con la API.

## Instalación

1. Clonar el repositorio:

git clone https://github.com/LucasJS28/emia-appweb.git
cd emia-appweb

2. Instalar dependencias:

npm install

3. Ejecución local

npm start

Luego abrir http://localhost:3000 en tu navegador.

## Pruebas

Para ejecutar pruebas con Jest y React Testing Library:

npm test

## Decisiones técnicas

- React + TypeScript: para tipado estático y componentes funcionales.
- Axios: para consumir la API de Emia.
- React Testing Library + Jest: para pruebas unitarias de componentes.
- Estructura de carpetas:
  - src/components: componentes reutilizables.
  - src/api: funciones para interactuar con la API.
  - src/types: tipos TypeScript.
- Diseño simple con CSS modular por componente (TaskForm.css).

## Despliegue

El proyecto está preparado para desplegar en Vercel:

- Conectar el repositorio con Vercel.
- Seleccionar proyecto React.
- Deploy automático.
