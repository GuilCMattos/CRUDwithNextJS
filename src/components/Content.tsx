
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

  export default function Content() { 

    const Clients = [
      new Client('Ana', 34, '1'),
      new Client('Bia', 45, '2'),
      new Client('Gui', 25, '3'),
      new Client('Ju', 12, '4'),
    ]
    
    function clientSelect(client: any) { 
      console.log(client.name)
    }
    
    function clientDelet(client: any) { 
      console.log(client.name)
    }

    function saveClient(client: any) { 
      console.log(client)
    }

    const [visible, setVisible] = useState<'table' | 'form' >('table')

    

    return(
      
        <Layout title="Cadastro Simples" >

          {visible === 'table' ? (

        <>
        <div className="flex justify-end">
        <Button onClick={() => setVisible('form')} className="mb-4">Novo Cliente</Button>
        </div>
        <Table clients={Clients} clientsSelect={clientSelect} clientsDelet={clientDelet}></Table>
        
        </>

           ) : (
             
             <Form 
             client={Clients[1]}
             clientChange={saveClient}
             cancel={() => setVisible('table')}
             />
           ) } 
        
          
      
      </Layout>
    )
  }