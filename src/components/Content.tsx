
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

  export default function Content() { 

    const [visible, setVisible] = useState<'table' | 'form' >('table')

    const [client, setClient] = useState<Client>(Client.vazio())
    const Clients = [
      new Client('Ana', 34, '1'),
      new Client('Bia', 45, '2'),
      new Client('Gui', 25, '3'),
      new Client('Ju', 12, '4'),
    ]
    
    function clientSelect(client: any) { 
      setClient(client)
      setVisible('form')
    }
    
    function clientDelet(client: any) { 
      console.log(client.name)
    }

    function saveClient(client: any) { 
      console.log(client)
      setVisible('table')
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
        <Table clients={Clients} clientsSelect={clientSelect} clientsDelet={clientDelet}></Table>
        
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