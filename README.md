# prova-ci-fernando-ferreira
Repositório para avaliação P2 de LAB de DES MULTI do sexto período do curso de DSM da FATEC de Jacareí - Nov/2025

Este projeto implementa um pipeline de CI básico com GitHub Actions para um projeto TypeScript.

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

[cite_start]Ele é acionado automaticamente em duas situações[cite: 12, 14]:
* Ao realizar `push` na *branch* `main`.
* Ao abrir um `pull request` para a *branch* `main`.

O pipeline executa as seguintes etapas:
1.  [cite_start]**Checkout do código**[cite: 16].
2.  [cite_start]**Instalar dependências**: Executa `npm install`[cite: 17].
3.  [cite_start]**Executar testes**: Executa `npm test` (que agora usa `ts-jest` para os testes em TypeScript)[cite: 18].

[cite_start]Se qualquer etapa falhar, o pipeline será marcado como "failed"[cite: 20].
