<!-- ELUCENIA technical documentation · pasi · de · no clinical/professional/rights approval -->

# PASI (Index für Ausdehnung und Schwere der Psoriasis)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/pasi)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Kopf und Hals: Erythem

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Kopf und Hals: Infiltration (Dicke)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Kopf und Hals: Schuppung

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Kopf und Hals: betroffene Fläche der Region

`a_h`

- `0` — 0 · keine Läsion
- `1` — 1 · weniger als 10 %
- `2` — 2 · 10 bis 29%
- `3` — 3 · 30 bis 49%
- `4` — 4 · 50 bis 69%
- `5` — 5 · 70 bis 89%
- `6` — 6 · 90 bis 100%

### Obere Extremitäten: Erythem

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Obere Extremitäten: Infiltration (Dicke)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Obere Extremitäten: Schuppung

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Obere Extremitäten: betroffene Fläche der Region

`a_s`

- `0` — 0 · keine Läsion
- `1` — 1 · weniger als 10 %
- `2` — 2 · 10 bis 29%
- `3` — 3 · 30 bis 49%
- `4` — 4 · 50 bis 69%
- `5` — 5 · 70 bis 89%
- `6` — 6 · 90 bis 100%

### Rumpf: Erythem

`e_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Rumpf: Infiltration (Dicke)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Rumpf: Schuppung

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Rumpf: betroffene Fläche der Region

`a_t`

- `0` — 0 · keine Läsion
- `1` — 1 · weniger als 10 %
- `2` — 2 · 10 bis 29%
- `3` — 3 · 30 bis 49%
- `4` — 4 · 50 bis 69%
- `5` — 5 · 70 bis 89%
- `6` — 6 · 90 bis 100%

### Untere Extremitäten: Erythem

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Untere Extremitäten: Infiltration (Dicke)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Untere Extremitäten: Schuppung

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Untere Extremitäten: betroffene Fläche der Region

`a_i`

- `0` — 0 · keine Läsion
- `1` — 1 · weniger als 10 %
- `2` — 2 · 10 bis 29%
- `3` — 3 · 30 bis 49%
- `4` — 4 · 50 bis 69%
- `5` — 5 · 70 bis 89%
- `6` — 6 · 90 bis 100%

### PASI-Ausgangswert (vor Behandlung), zur Berechnung des Ansprechens

`basal`

optional · Bereich: 0,1–72

## Fassung der Methode

PASI/Fredriksson-Pettersson 1978: 4 Regionen, 3 Zeichen 0–4, Fläche 0–6, gesamt 0–72

## Dokumentierte Formel

Je Region: (Erythem + Infiltration + Schuppung, je 0–4) × Fläche (0–6) × Regionsgewicht. Gewichte: Kopf 0,1; obere Extremitäten 0,2; Rumpf 0,3; untere Extremitäten 0,4. PASI = Summe der vier Regionen (0–72).

Fläche: 0 = keine; 1 = \< 10%; 2 = 10–29%; 3 = 30–49%; 4 = 50–69%; 5 = 70–89%; 6 = 90–100% der Region.

## Grenzen und Population

PASI quantifiziert Ausdehnung und Zeichen der Psoriasis, doch die Summe allein bestimmt weder Diagnose noch Behandlungsbedarf. Die Originalstudie betraf schwere chronische generalisierte Psoriasis. Prozentuales Ansprechen erfordert eine vergleichbare Ausgangsbeurteilung; Gewichtungen, Technik und Interpretation müssen zur Version passen.

## Referenzen

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Leichte Psoriasis nach PASI (≤ 10)

Nach der Regel der Zehn charakterisieren auch BSA > 10 % oder eine erhebliche Beeinträchtigung der Lebensqualität eine schwere Erkrankung, selbst bei PASI ≤ 10.


### 2

Mittelgradige bis schwere Psoriasis nach der Regel der Zehn (PASI > 10)


### 3

Leichte Psoriasis nach PASI (≤ 10)

| Ergebnisdetails | |
| --- | --- |
| Verbesserung gegenüber dem Ausgangs-PASI | 80% (PASI 75) |

Nach der Regel der Zehn charakterisieren auch BSA > 10 % oder eine erhebliche Beeinträchtigung der Lebensqualität eine schwere Erkrankung, selbst bei PASI ≤ 10.


### 4

Leichte Psoriasis nach PASI (≤ 10)

Nach der Regel der Zehn charakterisieren auch BSA > 10 % oder eine erhebliche Beeinträchtigung der Lebensqualität eine schwere Erkrankung, selbst bei PASI ≤ 10.

