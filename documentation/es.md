<!-- ELUCENIA technical documentation · pasi · es · no clinical/professional/rights approval -->

# PASI (índice de extensión y gravedad de la psoriasis)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/pasi)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Cabeza y cuello: eritema

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeza y cuello: infiltración (espesor)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeza y cuello: descamación

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeza y cuello: área afectada de la región

`a_h`

- `0` — 0 · sin lesión
- `1` — 1 · menos del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Miembros superiores: eritema

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros superiores: infiltración (espesor)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros superiores: descamación

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros superiores: área afectada de la región

`a_s`

- `0` — 0 · sin lesión
- `1` — 1 · menos del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Tronco: eritema

`e_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: infiltración (espesor)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: descamación

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: área afectada de la región

`a_t`

- `0` — 0 · sin lesión
- `1` — 1 · menos del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Miembros inferiores: eritema

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros inferiores: infiltración (espesor)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros inferiores: descamación

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Miembros inferiores: área afectada de la región

`a_i`

- `0` — 0 · sin lesión
- `1` — 1 · menos del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### PASI basal (antes del tratamiento), para calcular la respuesta

`basal`

opcional · intervalo: 0,1–72

## Edición del método

PASI/Fredriksson-Pettersson 1978: 4 regiones, 3 signos 0–4, área 0–6, total 0–72

## Fórmula documentada

En cada región: (eritema + infiltración + descamación, cada uno 0–4) × área (0–6) × peso regional. Pesos: cabeza 0,1; miembros superiores 0,2; tronco 0,3; miembros inferiores 0,4. PASI = suma de cuatro regiones (0–72).

área: 0 = ninguna; 1 = \< 10%; 2 = 10–29%; 3 = 30–49%; 4 = 50–69%; 5 = 70–89%; 6 = 90–100% de la región.

## Límites y población

El PASI cuantifica la extensión y los signos de psoriasis, pero el total aislado no identifica el diagnóstico ni la necesidad de tratamiento. El estudio original se realizó en psoriasis crónica generalizada grave. La respuesta porcentual exige una evaluación basal comparable; los pesos, la técnica y la interpretación deben corresponder a la versión.

## Referencias

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
