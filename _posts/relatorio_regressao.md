# Relatório de Análise de Desaprovação do Governo

## 📊 Performance do Modelo

O modelo de regressão logística obteve os seguintes resultados:

- **Acurácia (Teste):** 86.49%
- **AUC-ROC:** 0.789
- **Acurácia (Treino):** 91.13%

## 🎯 Principais Fatores de Influência

### Fatores que AUMENTAM a Desaprovação (Risco)

| Fator | Coeficiente | Odds Ratio | Impacto Estimado |
|-------|-------------|------------|------------------|
| avaliacao_seguranca_cod | 0.7891 | 2.20 | +120.1% |
| avaliacao_estradas_cod | 0.5447 | 1.72 | +72.4% |
| avaliacao_saude_cod | 0.4061 | 1.50 | +50.1% |
| religiao_outras | 0.3529 | 1.42 | +42.3% |
| avaliacao_educacao_cod | 0.3002 | 1.35 | +35.0% |

### Fatores que DIMINUEM a Desaprovação (Proteção)

| Fator | Coeficiente | Odds Ratio | Impacto Estimado |
|-------|-------------|------------|------------------|
| idade_60_mais | -0.9175 | 0.40 | -60.0% |
| rb_melhor | -0.5692 | 0.57 | -43.4% |
| idade_45_59 | -0.4234 | 0.65 | -34.5% |
| nota_natal_num | -0.4107 | 0.66 | -33.7% |
| avaliacao_limpeza_cod | -0.0220 | 0.98 | -2.2% |

## 📈 Visualizações

### Coeficientes e Importância
![Resultados da Regressão](regressao_resultados.png)

### Matriz de Confusão
![Matriz de Confusão](matriz_confusao.png)

## � Interpretação

1. **Coeficientes Positivos:** Indicam características ou avaliações que aumentam a probabilidade de desaprovar o governo.
2. **Coeficientes Negativos:** Indicam fatores que reduzem essa probabilidade.
3. **Odds Ratio:** Quantifica quantas vezes a chance de desaprovação aumenta ou diminui.

---
*Relatório gerado automaticamente.*
