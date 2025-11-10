# prova-ci-fernando-ferreira
Repositório para avaliação P2 de LAB de DES MULTI do sexto período do curso de DSM da FATEC de Jacareí - Nov/2025

Este projeto implementa um pipeline de CI básico com GitHub Actions, conforme solicitado na atividade.

## Como Rodar Localmente

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/prova-ci-fernando-ferreira.git](https://github.com/SEU-USUARIO/prova-ci-fernando-ferreira.git)
    cd prova-ci-fernando-ferreira
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute os testes:
    ```bash
    npm test
    ```

## Explicação do Pipeline (CI)

O pipeline de integração contínua está definido no ficheiro `.github/workflows/ci.yml`.

[cite_start]Ele é acionado automaticamente em duas situações[cite: 11]:
* [cite_start]Ao realizar `push` na *branch* `main`[cite: 12].
* [cite_start]Ao abrir um `pull request` para a *branch* `main`[cite: 14].

O pipeline executa as seguintes etapas:
1.  [cite_start]**Checkout do código**[cite: 16]: Faz o download do código.
2.  [cite_start]**Instalar dependências**[cite: 17]: Executa `npm install`.
3.  [cite_start]**Executar testes**: Executa `npm test`.

[cite_start]Se qualquer uma das etapas falhar (especialmente os testes), o pipeline será marcado como "failed" no GitHub[cite: 20].
