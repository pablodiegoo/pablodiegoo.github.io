---
layout: post
title: "Modelagem Econométrica de Desaprovação Governamental"
date: 2025-12-10 12:00:00
description: "Modelagem econométrica e regressão logística multivariada mensurando os determinantes empíricos e odds ratios da desaprovação política a partir de microdados amostrais domiciliares."
tags: [data-science, econometria, regressao, machine-learning, pesquisa-opiniao]
categories: [estudos, relatorios]
thumbnail: assets/img/posts/relatorio-regressao/thumbnail.png
toc:
  beginning: true
redirect_from:
  - /projects/gov_disapproval/
---

> [!NOTE]
> **Estudo Sanitizado (`proprietary_sanitized`)**: Modelagem estatística econométrica desenvolvida para gestão pública municipal no interior do Estado do Rio de Janeiro. Para resguardar o sigilo institucional sob NDA, a denominação do município e de agentes públicos foi integralmente descaracterizada para o arquétipo setorial **"Gestão Municipal do Interior Fluminense"**, com preservação estrita dos parâmetros econométricos, testes de ajuste e coeficientes estimados.

---

## 1. O Problema da Avaliação Política e Teoria da Escolha Pública

A avaliação de um governo não é um contínuo homogêneo nem decorre de uma média aritmética de notas atribuídas a secretarias isoladas. Sob a ótica da Teoria da Escolha Pública e dos incentivos eleitorais, o cidadão pondera a aprovação ou desaprovação governamental a partir de assimetrias cognitivas severas: perdas em serviços essenciais de proteção imediata pesam muito mais do que ganhos pontuais em infraestrutura estética.

Em municípios do interior, onde a proximidade física entre a população e o poder público é estreita, a desaprovação executiva atua como um sinalizador de ruptura contratual. Quando o cidadão declara desaprovar a administração municipal, tal posicionamento não reflete mero desacordo ideológico; reflete um acúmulo de fricções operacionais cotidianas.

A investigação aqui descrita objetivou responder a uma questão pragmática: **quais variáveis operacionais e sociodemográficas exercem maior tração marginal sobre a probabilidade de um munícipe desaprovar a gestão local?**

---

## 2. Desenho Amostral e Especificação Econométrica

A base empírica estruturou-se sobre pesquisa amostral domiciliar representativa da população urbana e rural do município, balanceada por cotas censitárias de gênero, faixa etária e distribuição geográfica.

Para modelar o fenômeno binário de desaprovação ($Y = 1$ para desaprovação da gestão executiva; $Y = 0$ para aprovação ou regular neutro), especificou-se uma **Regressão Logística Multivariada (Logit)**:

$$\ln\left(\frac{P(Y=1)}{1 - P(Y=1)}\right) = \beta_0 + \sum_{k=1}^K \beta_k X_k$$

Em que:
- $P(Y=1)$ representa a probabilidade estimada de desaprovação;
- A razão $\frac{P(Y=1)}{1 - P(Y=1)}$ representa as chances relativas (*odds*) do evento;
- $\exp(\beta_k)$ denota a **Razão de Chances (*Odds Ratio* - OR)** associada à covariável $X_k$, controlando pelos demais fatores.

### 2.1. Desempenho e Validação Estatística do Modelo

O modelo treinado apresentou calibração estatística robusta em partição cega de teste:

- **Acurácia em Partição de Teste:** 86,49%
- **Acurácia em Partição de Treino:** 91,13%
- **Área sob a Curva ROC (AUC-ROC):** 0,789

Tal patamar de AUC-ROC (próximo a 0,80) demonstra capacidade discriminativa sólida entre eleitores propensos a desaprovar e eleitores alinhados à gestão, superando amplamente classificadores ingênuos baseados em intenção espontânea de voto.

---

## 3. Matriz de Fatores de Influência e Odds Ratios

A Tabela 1 reúne todos os fatores estimados pelo modelo logístico, dispostos em ordem decrescente do impacto marginal absoluto sobre a desaprovação governamental:

| Fator / Covariável | Coeficiente ($\beta$) | Odds Ratio (OR) | Variação Estimada (%) | Vetor de Influência |
| :--- | :---: | :---: | :---: | :--- |
| **Faixa Etária: 60 anos ou mais** (`idade_60_mais`) | -0,9175 | 0,40 | -60,0% | Diminui Desaprovação |
| **Avaliação Crítica de Segurança** (`avaliacao_seguranca_cod`) | +0,7891 | 2,20 | +120,1% | Aumenta Desaprovação |
| **Percepção de Progresso Municipal** (`percepcao_progresso_municipal`) | -0,5692 | 0,57 | -43,4% | Diminui Desaprovação |
| **Avaliação Crítica de Estradas / Vias** (`avaliacao_estradas_cod`) | +0,5447 | 1,72 | +72,4% | Aumenta Desaprovação |
| **Faixa Etária: 45 a 59 anos** (`idade_45_59`) | -0,4234 | 0,65 | -34,5% | Diminui Desaprovação |
| **Aprovação de Eventos / Iluminação Festiva** (`avaliacao_eventos_festivos`) | -0,4107 | 0,66 | -33,7% | Diminui Desaprovação |
| **Avaliação Crítica de Saúde** (`avaliacao_saude_cod`) | +0,4061 | 1,50 | +50,1% | Aumenta Desaprovação |
| **Segmento Religioso: Outras Religiões** (`religiao_outras`) | +0,3529 | 1,42 | +42,3% | Aumenta Desaprovação |
| **Avaliação Crítica de Educação** (`avaliacao_educacao_cod`) | +0,3002 | 1,35 | +35,0% | Aumenta Desaprovação |
| **Gênero: Feminino** (`genero_feminino`) | +0,2836 | 1,33 | +32,8% | Aumenta Desaprovação |
| **Segmento Religioso: Evangélico** (`religiao_evangelico`) | +0,2482 | 1,28 | +28,2% | Aumenta Desaprovação |
| **Avaliação Crítica de Agricultura** (`avaliacao_agricultura_cod`) | +0,1689 | 1,18 | +18,4% | Aumenta Desaprovação |
| **Avaliação Crítica de Transporte Público** (`avaliacao_transporte_cod`) | +0,0892 | 1,09 | +9,3% | Aumenta Desaprovação |
| **Faixa Etária: 29 a 44 anos** (`idade_29_44`) | +0,0350 | 1,04 | +3,6% | Aumenta Desaprovação |
| **Avaliação Crítica de Limpeza Pública** (`avaliacao_limpeza_cod`) | -0,0220 | 0,98 | -2,2% | Efeito Nulo / Residual |

*Tabela 1: Parâmetros estimados da regressão logística multivariada de desaprovação governamental.*

---

## 4. Decomposição das Evidências Empíricas

A interpretação econométrica dos parâmetros evidencia quatro dinâmicas estruturantes na psicologia política municipal:

### 4.1. Segurança Pública como Gatilho Crítico de Ruptura (OR = 2,20)
A avaliação negativa da segurança pública desponta como o principal catalisador de rejeição. Eleitores que classificam a segurança municipal como ruim ou péssima possuem **120,1% a mais de chances (OR = 2,20)** de desaprovar o governo como um todo. 

A segurança opera como um bem de integridade física. Quando o sentimento de vulnerabilidade se instala no interior, o cidadão atribui a deterioração da ordem diretamente à inação da gestão executiva, anulando eventuais entregas em outras áreas.

### 4.2. A Fricção das Estradas e Vias Vicinais (OR = 1,72)
A malha viária assume peso desproporcional (+72,4% de chances de desaprovação). Em cidades de relevo acidentado e distritos rurais dispersos, o estado das estradas determina o escoamento agrícola, o transporte escolar e o acesso à saúde. Buracos e pontes precárias não são percebidos como mero desconforto estético; representam perda econômica direta para os moradores.

### 4.3. O Fator Higiênico da Saúde Pública (OR = 1,50)
A insatisfação com a saúde municipal eleva as chances de desaprovação em **50,1%**. Como bem público universal de uso recorrente, a saúde funciona na teoria dos dois fatores de Herzberg: quando funciona, é tratada como obrigação contratual da prefeitura; quando falha (falta de remédio ou fila no agendamento), converte-se instantaneamente em desaprovação ativa.

### 4.4. A Blindagem Geracional da Terceira Idade (OR = 0,40)
O perfil etário revela uma clivagem demográfica nítida. Ter **60 anos ou mais** reduz as chances de desaprovação governamental em **60,0% (OR = 0,40)** em relação à categoria de referência (jovens). Esse estrato é mais apegado a rotinas comunitárias, valoriza a estabilidade política e exibe maior tolerância a lentidões administrativas, ao passo que as faixas intermediárias e jovens impõem maior volatilidade eleitoral.

### 4.5. Percepção de Progresso como Amortecedor Sistêmico (OR = 0,57)
A crença de que a cidade está em trajetória positiva reduz a probabilidade de rejeição em **43,4%**. Tal métrica reflete o papel da expectativa futura: munícipes que enxergam obras e melhorias tangíveis na cidade tendem a relevar falhas pontuais de custeio corrente.

---

## 5. Visualizações e Curvas de Ajuste

A visualização dos coeficientes e da matriz de classificação comprova o poder discriminativo do algoritmo:

### Coeficientes e Odds Ratios
![Resultados da Regressão Logística](/assets/img/posts/relatorio-regressao/regressao_resultados.png)
*Figura 1: Distribuição dos coeficientes estimados e magnitude dos impactos marginais.*

### Matriz de Confusão em Partição de Teste
![Matriz de Confusão do Modelo](/assets/img/posts/relatorio-regressao/matriz_confusao.png)
*Figura 2: Matriz de confusão comprovando taxa de acerto balanceada entre aprovação e desaprovação.*

---

## 6. Implicações Estratégicas para a Tomada de Decisão Pública

A decomposição matemática da desaprovação demonstra que governos municipais não devem orientar seus investimentos exclusivamente por pesquisas descritivas de intenção de voto.

O modelo prova que a mitigação da rejeição passa por uma hierarquia precisa de ações:
1. **Estancar Focos de Insegurança Local:** Ações integradas de patrulhamento comunitário, iluminação LED em pontos escuros e videomonitoramento geram impacto estatístico superior a qualquer campanha publicitária institucional.
2. **Priorização Rígida de Vias Vicinais e Estradas:** Manutenção continuada de acessos interdistritais neutraliza a segunda maior fonte de reprovação da máquina pública.
3. **Foco no Abastecimento e Agilidade da Saúde:** Redução do tempo de fila e garantia de medicamentos básicos estancam a sangria diária da percepção popular.
