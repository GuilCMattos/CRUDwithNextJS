import React from "react";
import Button from "../components/Button";
import Form from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

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

 

React.useState()



  export default function Content() { 
    return(
        <Layout title="Cadastro Simples" >
        
        <>
        <div className="flex justify-end">
        <Button className="mb-4">Novo Cliente</Button>
        </div>
        <Table clients={Clients} clientsSelect={clientSelect} clientsDelet={clientDelet}></Table>
        
        </>
          
          <Form 
          client={Clients[1]}
          
          />
      
      </Layout>
    )
  }