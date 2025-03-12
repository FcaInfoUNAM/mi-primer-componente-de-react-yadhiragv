# Laboratorio React Mi primer componente

Este laboratorio tiene el objetivo de mostrar cómo iniciar un proyecto de React desde 0

## Requisitos Previos

1. Vite
2. Crear una cuenta en [GitHub](https://github.com/).
3. Utilizar un codespace de git hub o un dev container con docker en tu computadora de forma local

---

## Instrucciones Paso a Paso

### 1. Iniciar proyecto un nuevo proyecto

1.1 Ejecuta react en modo de desarrollo

```
npm run dev -- --host
```

> [!IMPORTANT]
> Se desplegará un pop up en la parte inferior derecha con el mensaje: La aplicación que se ejecuta en el puerto 5173 está disponible. 
> [Ver todos los puertos reenviados] (command:~remote.forwardedPorts.focus) [Abrir en el navegador] [Hacer público] Debes dar click en hacer público

> [!NOTE]
>Si no lograste darle click o no te apareció el pop up en la cinta de terminal ve a la opción puertos busca el puerto 5173, da click derecho, selecciona visibilidad de puerto y selecciona público

> [!NOTE]
>Si el proyecto no tiene caché en el repositorio utiliza npm install para descargar todo lo necesario

Abre el proyecto en el navegador web

### 2. Inspeccionando un componente

Debes ver un nav bar negro en la parte superior

2.1 Abre el archivo ```my-app/src/App.jsx``` y localiza la siguiente línea de código

```React
<Navigation srcImg={logo} alt="Logo"/>
```
2.2 Responde la siguiente pregunta en un archivo llamado entregable.txt
¿De dónde sale la etiqueta Navigation?

Abre el archivo ```my-app/src/Navigation.jsx``` 
verás la siguiente estructura de código:
```
export function Navigation({srcImg,alt}){
  ...
}
```
2.3 Si te das cuenta recibe 2 parametros, explica en entregable.txt cómo se recibieron esos parametros
> [!TIP]
>Revisa App.jsx

2.4 En App.jsx hay un arreglo de 3 objetos llamado navigationItems. Vamos a utilizarlo para generar de forma dinámica los elementos de nuestro componente Navigation para ello hay que realizar los siguientes cambios en el código:
```React
//App.jsx agregamos como parámetro items el arreglo
<Navigation srcImg={logo} alt="Logo" items={navigationItems}/>
```

ubica en Navigation.jsx las siguientes lineas:
```React
<a className="nav-item" href="#">FCA</a>
<a className="nav-item" href="#">Google</a>
<a className="nav-item" href="#">Facebook</a>
```
sustituyelas por la siguiente línea (vas a borrar 3 lineas y vas a dejar solo una)
```React
{items.map(e => <a className="nav-item" href={e.ref}>{e.title}</a>)}
```
Ahora hay que modificar los parametros de la función agregando el parámetro items

```Reeact
export function Navigation({srcImg,alt,items}){
  ...
}
```
2.5 Guarda los cambios y revisa que tengas el mismo resultado en el sitio web.

> [!NOTE]
> Ahora has logrado generar un compnente a través de una colección de datos

2.6 Revisa nuevamente ```App.jsx``` y explica en entregable.txt ¿donde se importan los archivos css, las imagenes y cómo es que se importa un componente?


### 3. Reto

trata de generar la siguiente estructura para una card con react tomando de ejemplo el código anterior en el archivo ```Grid.jsx```

```HTML
<div class="grid">
  <div class="card"><h2>FCA</h2><p>fca.unam.mx</p></div>
  <div class="card"><h2>google</h2><p>wwww.google.com</p></div>
  <div class="card"><h2>Facebook</h2><p>www.facebook.com</p></div>
</div>
```
> [!TIP]
> Usa el mismo arreglo que ocupaste al modificar Navigation


### 4. Sube los cambios al repositorio
```bash
cd ..
git add *
git commit -m "Mi primer componente de React"
git push origin main
```

### Solución

```React
/*Grid.jsx */
export function Grid({items}){
    return <div className="grid">
        {items.map(e=><div className="card"><h2>{e.title}</h2><p>{e.ref}</p></div>)}       
    </div>
}
```
```React
/*App.jsx*/
function App() {

  return (
    <>
      <Navigation srcImg={logo} alt="Logo" items={navigationItems}/>
      <Grid items={navigationItems}/>
    </>
  )
}
```