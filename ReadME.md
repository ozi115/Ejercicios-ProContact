Ejecutar el programa en el puerto mostrado. /3000
Automaticamente deje la parte del codigo para mostrar los datos en cosola. 

El apartado dentro de "mostrarPersonas.js" tiene comentado el codigo para un post hacía el link proporcionado.

Enviar los datos.
Se redireccionará al servidor de "/prueba" con un mensaje de "validación".

Detalles: A) La validación tuvo un pequeño error, con que la pagina no detectaba, pero dentro del postman, si. 
          B) Deje comentarios y varias otras carpetas de pruebas que estuve buscando para la validación (ninguna funcionó en base a los requisitos).
          Adjunto pruebas de ejercicios. 
          

        -------PREGUNTAS------

 1.	¿Qué es un servidor HTTP? 
es un conjunto de reglas para la comunicación entre el cliente y servidor el cual es responsable de procesar y responder solicitudes entrantes.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Son métodos de solicitud que implementan una semántica por individualidad entre los más usados y conocidos:
Get; Peticiones que recuperan datos.
Post: Envía una entidad a un recurso especifico y da un cambio de estado (modificación de los recursos existentes).
Put: Reemplaza representaciones actuales de los recursos del destino especificado.
Delete: Borra recursos específicos. 

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
Request es un cliente comparable a una biblioteca de peticiones, mientras el request hace posible las solicitudes, el “response” da respuesta a tales peticiones, ambos consisten en una línea de salida dependiente a la solicitud del cliente o servidor. 
Headers son aquellos encabezados mostradas como etiquetas para su comprensión del usuario, también llevan relación o una similitud con los metadatos sobre el cuerpo del mensaje. 

4.	¿Qué es un queryString? (En el contexto de una url)
Son consultas dentro de una base de datos para simplificar el url dentro de las variables a buscar. Con ello es posible crear portales personalizables en función de las interacciones dentro de la pagina. 
5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Es el estatus que devuelve la respuesta dentro del código de estado: 

100-199 Informativo - La solicitud fue recibida y se está procesando.
200-299 Éxito       - La acción fue recibida con éxito, entendido y aceptado.
300-399 Redirección  - Otras peticiones hay que realizar para completar la petición.
400-499 Error en Cliente - La solicitud contiene mala sintaxis y no pueden llevarse a cabo.
500-599 Error de servidor - El servidor no pudo cumplir con una solicitud aparentemente válida.
6.	¿Cómo se envía data en un Get y cómo en un POST? 
Los datos enviados por un Get, son introducidos dentro de la url de la pagina mostrando los datos explícitamente separados por “?” y “&” simulando el cuerpo de la info. 
El método Post, solo muestra los apartados de los cuerpos dando la información con las especificaciones y no exactamente la información introducida. 

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Verbo Post, muestra la versión de protocolo el código de estado y los encabezados para saber internamente donde se encuentra el usuario y las consultas realizadas. 

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
Son formatos de datos para llevar a cabo una comunicación entre sistemas o servidores/clientes. Ej:
JSon:
“pieza”: {
        “tipo”: “A”
        “nombre”: “Tornillo”,
        “descripcion”: “Cilindro mecánico con una cabeza utilizado en la fijación temporal de unas piezas con otras”,
        “caracteristica”: {
            “tipo”: “metal”
            “tamanyo”: 10
        },
        “vacio”: “”
     }
XML:

<Pieza tipo=”A”>
<nombre>Tornillo</nombre>
    <descripcion>Cilindro mecanico con una cabeza  </descripcion>
    <caracateristica>
        <tipo>metal</tipo>
        <tamanyo>10</tamanyo>
    </caracateristica>
    <vacio></vacio>
</pieza>

9.	Explicar brevemente el estándar SOAP
Es un protocolo para el intercambio de información en entornos descentralizados y distribuidos, los mensajes SOAP son usados para crear patrones de petición/respuesta basados en XML.

10.	Explicar brevemente el estándar REST Full
Sistema de doble vía que consulta y da respuesta por métodos de comunicación a través de protocolo http (get, post, delete, put) y status code, también emplean parámetros de autenticación y validación.

11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Dentro de un request, transmite la info. Del navegador del cliente en la pagina que esta siendo solicitada, del servidor y entre otras. Y se compone del método, la url solicitada y el protocolo http.
Un content-type dice al cliente el tipo de contenido a retornar por el tipo de medio, ya sea en base a imágenes o texto plano, entre otros. 
 

