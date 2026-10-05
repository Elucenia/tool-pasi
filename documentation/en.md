<!-- ELUCENIA technical documentation · pasi · en · no clinical/professional/rights approval -->

# PASI (Psoriasis Area and Severity Index)

[conditions, sources and permissions](https://elucenia.org/en/tools/pasi)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Head and neck: erythema

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Head and neck: induration (thickness)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Head and neck: scaling

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Head and neck: affected regional area

`a_h`

- `0` — 0 · no lesion
- `1` — 1 · less than 10%
- `2` — 2 · 10 to 29%
- `3` — 3 · 30 to 49%
- `4` — 4 · 50 to 69%
- `5` — 5 · 70 to 89%
- `6` — 6 · 90 to 100%

### Upper limbs: erythema

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Upper limbs: induration (thickness)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Upper limbs: scaling

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Upper limbs: affected regional area

`a_s`

- `0` — 0 · no lesion
- `1` — 1 · less than 10%
- `2` — 2 · 10 to 29%
- `3` — 3 · 30 to 49%
- `4` — 4 · 50 to 69%
- `5` — 5 · 70 to 89%
- `6` — 6 · 90 to 100%

### Trunk: erythema

`e_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Trunk: induration (thickness)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Trunk: scaling

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Trunk: affected regional area

`a_t`

- `0` — 0 · no lesion
- `1` — 1 · less than 10%
- `2` — 2 · 10 to 29%
- `3` — 3 · 30 to 49%
- `4` — 4 · 50 to 69%
- `5` — 5 · 70 to 89%
- `6` — 6 · 90 to 100%

### Lower limbs: erythema

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Lower limbs: induration (thickness)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Lower limbs: scaling

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Lower limbs: affected regional area

`a_i`

- `0` — 0 · no lesion
- `1` — 1 · less than 10%
- `2` — 2 · 10 to 29%
- `3` — 3 · 30 to 49%
- `4` — 4 · 50 to 69%
- `5` — 5 · 70 to 89%
- `6` — 6 · 90 to 100%

### Baseline PASI (before treatment), to calculate response

`basal`

optional · range: 0.1–72

## Method edition

PASI/Fredriksson-Pettersson 1978: 4 regions, 3 signs 0–4, area 0–6, total 0–72

## Documented formula

In each region: (erythema + induration + scaling, each 0 to 4) × area (0–6) × region weight. Weights: head 0.1; upper limbs 0.2; trunk 0.3; lower limbs 0.4. PASI = sum of four regions (0–72).

area: 0 = none; 1 = \< 10%; 2 = 10–29%; 3 = 30–49%; 4 = 50–69%; 5 = 70–89%; 6 = 90–100% of the region.

## Limits and population

PASI quantifies the extent and signs of psoriasis, but the total alone does not identify a diagnosis or treatment need. The original study involved severe generalized chronic psoriasis. Percentage response requires a comparable baseline assessment; weights, technique and interpretation must match the version.

## References

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
