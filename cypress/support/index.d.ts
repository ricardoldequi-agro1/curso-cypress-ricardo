export {};

declare global {
  namespace Cypress {
    interface Chainable {
      gerarTokenAPI(username: string, password: string): Chainable<any>;
      criarUsuarioAPI(token: string, usuario: object): Chainable<any>;
    }
  }
}