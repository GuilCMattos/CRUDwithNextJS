import useTableOrForm  from './useTableOrForm';
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";
import { useState, useEffect } from "react";


export default function useClients() {
    const repo: ClientRepository = new CollectionClient()

    const {viewTable, viewForm, formVisible, tableVisible} = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.vazio())

    const [clients, setClients] = useState<Client>()

    useEffect(obterTodos, [])

    function obterTodos() { 
      repo.obterTodos().then(clients => { 
        setClients(clients)
        viewTable()
      })
    }
    
    function clientSelect(client: any) { 
      setClient(client)
      viewForm()
    }
    
    async function clientDelet(client: any) { 
      await repo.excluir(client)
      
      obterTodos()
    }

    async function saveClient(client: any) { 
      await repo.salvar(client)
      obterTodos()
    }

    function newClient(client: any) { 
      setClient(Client.vazio())
      viewForm()
    }

    return { 
        client,
        clients,
        saveClient,
        newClient,
        clientDelet,
        clientSelect,
        obterTodos,
        tableVisible,
        viewTable,
    }
}