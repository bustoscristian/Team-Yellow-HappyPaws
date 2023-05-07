# Consignas

## Happy Paws

Happy Paws es una web simple para visualizar tus mascotas. Se pueden seleccionar entre perros, gatos o pájaros, pero de momento no se visualiza ninguna mascota. Tu tarea será retocar esta web, siguiendo las tareas a continuación. La implementación inicial usa la librería de componentes Chakra UI (https://chakra-ui.com), pero sos libre de realizar tus tareas con las herramientas que te sean cómodas. Podés empezar en el archivo App.js

## Restricciones

Capaz está de mas decirlo, pero no podrás modificar los archivos "api.js", "datasets" y "sleep.js". Obviamente podés leerlos para ver que hacen y modificarlos temporalmente para hacer pruebas, pero deberás entregar esos archivos tal cual están.

### Tareas principales

- Logo
  Se debe agregar una imagen de una pata a la derecha del logo

- Footer
  Se debe agregar un pequeño Footer al final de la página, que diga "Developed with ❤️ by Team-Yellow" y tenga un ícono para ir a github y otro para ir a instagram. Los íconos deben redireccionarte a esas páginas.

- Body
  De momento, no se muestran los listados de mascotas. Estos listados se pueden conseguir usando los métodos getDogs(), getCats() y getBirds(). Estos métodos son asíncronos, y simulan el funcionamiento de una api. Es obligatorio usar estos métodos para conseguir los listados. Cada mascota tiene tres atributos: nombre, una foto, y la ultima vez que la pasearon o que la alimentaron.
  La tarea es diseñar una card que muestre los tres datos de cada mascota, y listar con esa card todos los perros, gatos y pájaros en sus correspondientes secciones.

### Puntos Extra

Una vez hayas terminado los puntos principales, podés intentar los puntos extra para sumar calificación. Son absolutamente opcionales y la resolución que les des no afectan negativamente tu evaluación

- Routing
  La implementación inicial siempre hace que cuando entres a la web, se vea la sección de Dogs por defecto. Configurar la web para que cuando la url tiene al final "/cats" muestre los gatos y cuando tenga al final "/birds" muestre los pájaros

- Lazy Loading
  Por la implementación inicial, cuando se carga la página, las tres secciones se cargan, aunque no se estén viendo. Configurar el componente Tabs para que solo se cargue la sección una vez que se seleccionó.

- Fechas
  Se requiere que los horarios se muestren siempre con la hora de Chile, independientemente del lugar del mundo en el que esté el usuario. Es decir, si la última vez que un perro fue alimentado fue a las 14hs de Argentina, debería mostrar que fue alimentado a las 13hs de Chile.

- Tabs
  Las tabs que dicen Dogs, Cats y Birds, tienen un color de fondo que se pisa con el color de fondo de la página. Si cambias la prop "colorScheme" del componente Tabs a "green", te vas a dar cuenta que la tab seleccionada tiene un fondo de otro color. Esto es un comportamiento de la librería de componentes chakraUI, y se puede configurar.
  La tarea es investigar como configurar el fondo de la tab seleccionada para que sea un poco mas oscuro.
