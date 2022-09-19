
import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/CollectionClient";
import Button from "../components/Button";
import Form from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";


  export default function Content() { 

    const { 
      client,
      clients,
      clientDelet,
      newClient,
      clientSelect,
      saveClient,
      tableVisible,
      viewTable
       } = useClients()
 

    return(
      
        <Layout title="Cadastro Simples" >

          {tableVisible ? (

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
             cancel={viewTable}
             />
           ) } 
        
          
      
      </Layout>
    )
  }