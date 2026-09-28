# Eventos Tecnológicos

Samuel Perez Gomez 

## Descripción del proyecto

Aplicación web desarrollada en React (con Vite) que presenta un listado de eventos tecnológicos disponibles para estudiantes de la Universidad Católica de Pereira. Permite ver el detalle de cada evento, inscribirse o cancelar la inscripción, y enviar un formulario de inscripción general.
Toda la información está almacenada dentro del proyecto (en un arreglo de eventos), por lo que no requiere base de datos ni conexión con una API.

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

Lo más difícil fue entender cómo manejar el estado de cada tarjeta de forma independiente. Al principio no tenía claro por qué al hacer clic en "Inscribirme" en un evento no cambiaban los demás. Entendí que cada EventCard es una instancia distinta del componente y por eso cada una tiene su propio useState. También me costó un poco pasar el arreglo de eventos como props al formulario para generar las opciones del <select> con .map() en lugar de escribirlas a mano.

## ¿Qué diferencia identifica ahora entre HTML y React?

En HTML el contenido es estático: si quiero seis tarjetas tengo que escribir seis veces el mismo bloque, y para cambiar algo al hacer clic necesito JavaScript aparte. En React el contenido se genera dinámicamente a partir de datos: escribo la tarjeta una sola vez como componente y la reutilizo con .map() para todos los eventos. Además, la interfaz cambia sola en respuesta a la interacción del usuario gracias al estado, sin tener que modificar el DOM manualmente.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```
