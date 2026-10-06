<!-- ELUCENIA technical documentation · pasi · fr · no clinical/professional/rights approval -->

# PASI (indice d’étendue et de sévérité du psoriasis)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/pasi)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Tête et cou: érythème

`e_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tête et cou: infiltration (épaisseur)

`i_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tête et cou: desquamation

`d_h`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tête et cou: surface régionale atteinte

`a_h`

- `0` — 0 · aucune lésion
- `1` — 1 · moins de 10 %
- `2` — 2 · 10 à 29%
- `3` — 3 · 30 à 49%
- `4` — 4 · 50 à 69%
- `5` — 5 · 70 à 89%
- `6` — 6 · 90 à 100%

### Membres supérieurs: érythème

`e_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres supérieurs: infiltration (épaisseur)

`i_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres supérieurs: desquamation

`d_s`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres supérieurs: surface régionale atteinte

`a_s`

- `0` — 0 · aucune lésion
- `1` — 1 · moins de 10 %
- `2` — 2 · 10 à 29%
- `3` — 3 · 30 à 49%
- `4` — 4 · 50 à 69%
- `5` — 5 · 70 à 89%
- `6` — 6 · 90 à 100%

### Tronc : érythème

`e_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronc : infiltration (épaisseur)

`i_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronc: desquamation

`d_t`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Tronc: surface régionale atteinte

`a_t`

- `0` — 0 · aucune lésion
- `1` — 1 · moins de 10 %
- `2` — 2 · 10 à 29%
- `3` — 3 · 30 à 49%
- `4` — 4 · 50 à 69%
- `5` — 5 · 70 à 89%
- `6` — 6 · 90 à 100%

### Membres inférieurs: érythème

`e_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres inférieurs: infiltration (épaisseur)

`i_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres inférieurs: desquamation

`d_i`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Membres inférieurs: surface régionale atteinte

`a_i`

- `0` — 0 · aucune lésion
- `1` — 1 · moins de 10 %
- `2` — 2 · 10 à 29%
- `3` — 3 · 30 à 49%
- `4` — 4 · 50 à 69%
- `5` — 5 · 70 à 89%
- `6` — 6 · 90 à 100%

### PASI initial (avant traitement), pour calculer la réponse

`basal`

facultatif · intervalle: 0,1–72

## Édition de la méthode

PASI/Fredriksson-Pettersson 1978 : 4 régions, 3 signes 0–4, surface 0–6, total 0–72

## Formule documentée

Dans chaque région: (érythème + infiltration + desquamation, chacun 0–4) × surface (0–6) × poids régional. Poids: tête 0,1; membres supérieurs 0,2; tronc 0,3; membres inférieurs 0,4. PASI = somme des quatre régions (0–72).

surface: 0 = aucune; 1 = \< 10%; 2 = 10–29%; 3 = 30–49%; 4 = 50–69%; 5 = 70–89%; 6 = 90–100% de la région.

## Limites et population

Le PASI quantifie l’étendue et les signes du psoriasis, mais le total seul n’identifie ni le diagnostic ni le besoin d’un traitement. L’étude originale concernait le psoriasis chronique généralisé sévère. Une réponse en pourcentage nécessite une évaluation initiale comparable ; pondérations, technique et interprétation doivent correspondre à la version.

## Références

- [Fredriksson T, Pettersson U. Severe psoriasis: oral therapy with a new retinoid. Dermatologica, 1978.](https://doi.org/10.1159/000250839)

- [Finlay AY. Current severe psoriasis and the rule of tens. Br J Dermatol, 2005.](https://doi.org/10.1111/j.1365-2133.2005.06502.x)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Psoriasis léger selon le PASI (≤ 10)

Selon la règle des dix, une BSA > 10 % ou un impact important sur la qualité de vie caractérisent également une maladie sévère, même avec un PASI ≤ 10.


### 2

Psoriasis modéré à sévère selon la règle des dix (PASI > 10)


### 3

Psoriasis léger selon le PASI (≤ 10)

| Détails du résultat | |
| --- | --- |
| Amélioration par rapport au PASI de base | 80% (PASI 75) |

Selon la règle des dix, une BSA > 10 % ou un impact important sur la qualité de vie caractérisent également une maladie sévère, même avec un PASI ≤ 10.


### 4

Psoriasis léger selon le PASI (≤ 10)

Selon la règle des dix, une BSA > 10 % ou un impact important sur la qualité de vie caractérisent également une maladie sévère, même avec un PASI ≤ 10.

