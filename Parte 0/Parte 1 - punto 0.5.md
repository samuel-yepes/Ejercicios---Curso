```mermaid
sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario->>Navegador: Accede a https://studies.cs.helsinki.fi/exampleapp/spa
    Navegador->>Servidor: GET /spa.html
    Servidor-->>Navegador: HTML (spa.html)

    Navegador->>Servidor: GET /spa.js
    Servidor-->>Navegador: JavaScript (spa.js)

    Navegador->>Servidor: GET /data.json
    Servidor-->>Navegador: JSON con notas existentes

    Usuario->>Navegador: Escribe nota y presiona "Save"
    Navegador->>Servidor: POST /new_note_spa
    activate Navegador
    Note right of Navegador: Envia JSON:\n{content: "Nota nueva", date: "fecha"}

    Servidor-->>Navegador: 201 Created
    deactivate Navegador
    Note right of Navegador: Actualiza lista sin recargar la página
```
