<!-- ELUCENIA technical documentation · pasi · it · no clinical/professional/rights approval -->

# PASI (indice di estensione e gravità della psoriasi)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/pasi)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Testa e collo: eritema

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Testa e collo: infiltrazione (spessore)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Testa e collo: desquamazione

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Testa e collo: area interessata della regione

`a_h`

- `0` — 0 · nessuna lesione
- `1` — 1 · meno del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Arti superiori: eritema

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti superiori: infiltrazione (spessore)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti superiori: desquamazione

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti superiori: area interessata della regione

`a_s`

- `0` — 0 · nessuna lesione
- `1` — 1 · meno del 10%
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

### Tronco: infiltrazione (spessore)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: desquamazione

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: area interessata della regione

`a_t`

- `0` — 0 · nessuna lesione
- `1` — 1 · meno del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Arti inferiori: eritema

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti inferiori: infiltrazione (spessore)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti inferiori: desquamazione

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Arti inferiori: area interessata della regione

`a_i`

- `0` — 0 · nessuna lesione
- `1` — 1 · meno del 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### PASI basale (prima del trattamento), per calcolare la risposta

`basal`

facoltativo · intervallo: 0,1–72

## Edizione del metodo

PASI/Fredriksson-Pettersson 1978: 4 regioni, 3 segni 0–4, area 0–6, totale 0–72

## Formula documentata

In ogni regione: (eritema + infiltrazione + desquamazione, ciascuno 0–4) × area (0–6) × peso regionale. Pesi: testa 0,1; arti superiori 0,2; tronco 0,3; arti inferiori 0,4. PASI = somma delle quattro regioni (0–72).

area: 0 = nessuna; 1 = \< 10%; 2 = 10–29%; 3 = 30–49%; 4 = 50–69%; 5 = 70–89%; 6 = 90–100% della regione.

## Limiti e popolazione

Il PASI quantifica l’estensione e i segni della psoriasi, ma il totale da solo non identifica una diagnosi o la necessità di un trattamento. Lo studio originale ha riguardato la psoriasi cronica generalizzata grave. La risposta percentuale richiede una valutazione basale comparabile; pesi, tecnica e interpretazione devono corrispondere alla versione.

## Riferimenti

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Psoriasi lieve secondo il PASI (≤ 10)

Secondo la regola dei dieci, un BSA > 10% o un importante impatto sulla qualità di vita caratterizzano anche una malattia grave, anche con PASI ≤ 10.


### 2

Psoriasi moderata-grave secondo la regola dei dieci (PASI > 10)


### 3

Psoriasi lieve secondo il PASI (≤ 10)

| Dettagli del risultato | |
| --- | --- |
| Miglioramento rispetto al PASI basale | 80% (PASI 75) |

Secondo la regola dei dieci, un BSA > 10% o un importante impatto sulla qualità di vita caratterizzano anche una malattia grave, anche con PASI ≤ 10.


### 4

Psoriasi lieve secondo il PASI (≤ 10)

Secondo la regola dei dieci, un BSA > 10% o un importante impatto sulla qualità di vita caratterizzano anche una malattia grave, anche con PASI ≤ 10.

