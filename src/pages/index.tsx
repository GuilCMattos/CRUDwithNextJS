import Button from "../components/Button";
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

export default function Home() {
  return (
    <div className={ 
      `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white `
    }>
      <Layout title="Cadastro Simples" >
        <div className="flex justify-end">
        <Button className="mb-4">Novo Cliente</Button>
        </div>
        <Table clients={Clients} clientsSelect={clientSelect} clientsDelet={clientDelet}></Table>
      </Layout>
    </div>
  )
}
