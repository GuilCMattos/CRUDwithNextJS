
import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/CollectionClient";
import Button from "../components/Button";
import Form from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

  export default function Content() { 

    const repo: ClientRepository = new CollectionClient()

    const [visible, setVisible] = useState<'table' | 'form' >('table')

    const [client, setClient] = useState<Client>(Client.vazio())

    const [clients, setClients] = useState<Client>()

    useEffect(obterTodos, [])

    function obterTodos() { 
      repo.obterTodos().then(clients => { 
        setClients(clients)
        setVisible('table')
      })
    }
    
    function clientSelect(client: any) { 
      setClient(client)
      setVisible('form')
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
      setVisible('form')
    }

   

    

    return(
      
        <Layout title="Cadastro Simples" >

          {visible === 'table' ? (

        <>
        <div className="flex justify-end">
        <Button onClick={()=> newClient(client)} className="mb-4">Novo Cliente</Button>
        </div>
        <Table clients={clients} clientsSelect={clientSelect} clientsDelet={clientDelet}></Table>
        
        </>

           ) : (
             
             <Form 
             client={client}
             clientChange={saveClient}
             cancel={() => setVisible('table')}
             />
           ) } 
        
          
      
      </Layout>
    )
  }