# Evidencias
Aquí se encontrarán mis evidencias del desarrollo y despliegue del proyecto del módulo 2.

## Despliegue del Proyecto
Puedes visualizar el proyecto terminado y funcionando en vivo a través de GitHub Pages haciendo clic en el siguiente enlace:

👉 **[Enlace a mi página desplegada](https://emi-ing04.github.io/FundamentosDesarrolloWeb-Proyecto-Final/)**

---

## Capturas de Pantalla

A continuación, presento las evidencias gráficas del repositorio y del proyecto terminado. *(Nota: Las imágenes están alojadas en la carpeta local de este repositorio).*

### Vistas de GitHub Pages
![Vista del proyecto terminado en GitHub Pages](./FotoEvidencia/GitHub Pages.png)

### Historial de Commits
![Captura del historial de commits en GitHub](./FotoEvidencia/HistorialCommits.png)

### Vista móvil
![Captura del vista en móvil](./FotoEvidencia/Movil.png)

### Vista desktop
![Captura del vista en desktop](./FotoEvidencia/Desktop.png)

---

## Aprendizajes

### 1. ¿Qué fue lo más fácil y lo más retador del proyecto?
*Lo más fácil fue comprender la estructura base de HTML y aplicar estilos generales usando variables CSS (:root), ya que me permitió parametrizar los colores y la tipografía de todo el proyecto de forma rápida.

Lo más retador fue diseñar la 'cinemática' del menú responsivo para dispositivos móviles. Lograr que el botón de hamburguesa se transformara en una 'X', sincronizar la animación de despliegue del menú usando la propiedad transform: translateX(), y enlazar todo correctamente con JavaScript sin generar problemas de scroll horizontal requirió mucha iteración y ajuste de tolerancias en el código.

### 2. ¿Qué partes de HTML semántico y Flexbox usaste y por qué?
* Utilicé etiquetas de HTML semántico como <header>, <nav>, <main>, <section>, y <footer>. Las implementé porque le dan un orden lógico a la información, no solo para el navegador, sino para los lectores de pantalla. Siendo REBO un dispositivo con enfoque inclusivo, la accesibilidad desde el código fuente era un requisito fundamental.

En cuanto a Flexbox, lo utilicé como mi herramienta principal para alineación en una sola dirección (como una línea de ensamblaje). Lo apliqué en la barra de navegación (justify-content: space-between) para separar el logo de los enlaces, en el banner de cookies para alinear el texto con los botones, y en el footer para distribuir las columnas de información uniformemente sin importar el ancho de la pantalla.

### 3. ¿Cómo organizaste tus media queries y breakpoints?
* Organicé mis media queries siguiendo un enfoque modular, colocándolas al final de cada archivo CSS correspondiente (navbar.css y estilos.css) para que sobreescribieran las reglas base solo cuando fuera necesario.

Utilicé un breakpoint principal de max-width: 768px, que es el límite de tolerancia estándar para tabletas y teléfonos móviles. Al cruzar este punto, las media queries apilan las columnas del footer en dirección vertical (flex-direction: column), ocultan la barra de navegación tradicional, y encienden la interfaz táctil con el botón de hamburguesa para optimizar el espacio visual.

### 4. ¿Qué mejorarías en una siguiente versión?
* En una siguiente versión me enfocaría en tres áreas:

Accesibilidad avanzada: Profundizaría en el uso de etiquetas ARIA y navegación por teclado más estricta para hacer honor a la naturaleza inclusiva del proyecto REBO.

Optimización de carga: Implementaría compresión de imágenes de próxima generación (como WebP) para que la galería de 'Pruebas en Usuarios' cargue mucho más rápido en conexiones móviles inestables.

Micro-interacciones: Agregaría animaciones más sofisticadas en las tarjetas informativas y quizás un 'Modo Oscuro' nativo, utilizando más funciones de JavaScript para enriquecer la experiencia de usuario final.