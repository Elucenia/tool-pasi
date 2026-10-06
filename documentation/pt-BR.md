<!-- ELUCENIA technical documentation · pasi · pt-BR · no clinical/professional/rights approval -->

# PASI (Psoriasis Area and Severity Index)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/pasi)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Cabeça e pescoço: eritema

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeça e pescoço: infiltração (espessura)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeça e pescoço: descamação

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Cabeça e pescoço: área acometida da região

`a_h`

- `0` — 0 · sem lesão
- `1` — 1 · menos de 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Membros superiores: eritema

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros superiores: infiltração (espessura)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros superiores: descamação

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros superiores: área acometida da região

`a_s`

- `0` — 0 · sem lesão
- `1` — 1 · menos de 10%
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

### Tronco: infiltração (espessura)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: descamação

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronco: área acometida da região

`a_t`

- `0` — 0 · sem lesão
- `1` — 1 · menos de 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### Membros inferiores: eritema

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros inferiores: infiltração (espessura)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros inferiores: descamação

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membros inferiores: área acometida da região

`a_i`

- `0` — 0 · sem lesão
- `1` — 1 · menos de 10%
- `2` — 2 · 10 a 29%
- `3` — 3 · 30 a 49%
- `4` — 4 · 50 a 69%
- `5` — 5 · 70 a 89%
- `6` — 6 · 90 a 100%

### PASI basal (antes do tratamento), para calcular a resposta

`basal`

opcional · intervalo: 0,1–72

## Edição do método

PASI/Fredriksson Pettersson 1978:4 regiões,3 sinais 0–4, área 0–6, total 0–72

## Fórmula documentada

Em cada região: (eritema + infiltração + descamação, cada um de 0 a 4) × área (0 a 6) × peso da região. Pesos: cabeça 0,1; membros superiores 0,2; tronco 0,3; membros inferiores 0,4. PASI = soma das quatro regiões (0 a 72).

Área: 0 = nenhuma; 1 = \< 10%; 2 = 10 a 29%; 3 = 30 a 49%; 4 = 50 a 69%; 5 = 70 a 89%; 6 = 90 a 100% da região.

## Limites e população

O PASI quantifica extensão e sinais de psoríase, mas não identifica diagnóstico ou necessidade de um tratamento pelo total isolado. O estudo original ocorreu em psoríase crônica generalizada grave. Resposta percentual exige uma avaliação basal comparável; pesos, técnica e interpretação devem corresponder à versão.

## Referências

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Psoríase leve pelo PASI (≤ 10)

Pela regra dos dez, BSA > 10% ou impacto importante na qualidade de vida também caracterizam doença grave, mesmo com PASI ≤ 10.


### 2

Psoríase moderada a grave pela regra dos dez (PASI > 10)


### 3

Psoríase leve pelo PASI (≤ 10)

| Detalhes do resultado | |
| --- | --- |
| Melhora em relação ao PASI basal | 80% (PASI 75) |

Pela regra dos dez, BSA > 10% ou impacto importante na qualidade de vida também caracterizam doença grave, mesmo com PASI ≤ 10.


### 4

Psoríase leve pelo PASI (≤ 10)

Pela regra dos dez, BSA > 10% ou impacto importante na qualidade de vida também caracterizam doença grave, mesmo com PASI ≤ 10.

