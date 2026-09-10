# Eventos Tecnológicos

**Nombre:** [Escribe aquí tu nombre completo]

## Descripción del proyecto

Aplicación web desarrollada en React (con Vite) que presenta un listado de eventos
tecnológicos disponibles para estudiantes de la Universidad Católica de Pereira.
Permite ver el detalle de cada evento, inscribirse o cancelar la inscripción, y
enviar un formulario de inscripción general.

## Componentes creados

- **Header**: encabezado con el título y la navegación (Inicio, Eventos, Inscripción).
- **EventCard**: tarjeta individual de cada evento. Recibe los datos por props y
  maneja dos estados propios: mostrar/ocultar detalles y estado de inscripción.
- **RegistrationForm**: formulario de inscripción con nombre, correo y selección
  del evento (las opciones del `<select>` se generan con `.map()` sobre el arreglo
  de eventos).
- **Footer**: pie de página con el nombre de la universidad y el año.
- **App**: componente principal que importa el arreglo de eventos y renderiza el
  resto de componentes.

## Conceptos de React utilizados

- Componentes funcionales
- Props para pasar datos de `App` a `EventCard` y `RegistrationForm`
- `useState` para manejar el estado de inscripción y de detalles visibles en cada
  tarjeta, y el estado del formulario
- Renderizado de listas con `.map()` y uso de `key`
- Manejo de eventos `onClick` y `onSubmit`
- HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`,
  `<footer>`)

## ¿Qué fue lo más difícil del ejercicio?

[Escribe aquí tu respuesta personal, por ejemplo: manejar el estado de cada tarjeta
de forma independiente, o entender cómo pasar los eventos como props al formulario.]

## ¿Qué diferencia identifica ahora entre HTML y React?

[Escribe aquí tu respuesta personal, por ejemplo: en HTML el contenido es estático,
mientras que en React el contenido se genera dinámicamente a partir de datos y
puede cambiar en respuesta a la interacción del usuario gracias al estado.]

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```
