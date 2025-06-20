```mermaid
sequenceDiagram
    participant Cliente
    participant Dom

    Cliente->>Dom: POST / https://studies.cs.helsinki.fi/exampleapp/new_note
    Dom->>Dom: guardar nota
    Dom-->>Cliente: Respuesta / crea <li>
    
```