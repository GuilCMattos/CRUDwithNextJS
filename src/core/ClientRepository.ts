import Client from "./Client"

export default interface ClientRepository { 
    salvar(client: any): Promise<Client>
    excluir(client: any): Promise<void>
    obterTodos(): Promise<Client[]>
}