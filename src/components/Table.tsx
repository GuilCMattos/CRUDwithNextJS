import { IconEdit, IconTrash } from "./Icons"

interface TableProps { 
    clients: any
    clientsSelect?: (client: any) => void
    clientsDelet?: (client: any) => void
}

export default function Table(props: TableProps) { 

    const initActions = props.clientsDelet || props.clientsSelect

    function renderizarCabecalho() { 
        return ( 
            <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            {initActions ? <th className="">Ações</th> : false}
        </tr>
        )
    }

    function renderizarDados() { 
        return props.clients?.map((client, i)=> { 
            return ( 
                <tr key={client.id} className={`
                ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    { initActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: any) { 
        return (
            <td className="flex justify-center">

                {props.clientsSelect ? (

                    <button onClick={e => props.clientsSelect?.(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>{IconEdit}</button>

                ) : false}

                {props.clientsDelet ? (

                    <button onClick={e => props.clientsDelet?.(client)}  className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>{IconTrash}</button>
             

                ) : false}

            </td>
        )
           
        }

    return (
        <table className="w-full rounded-xl overflow-hidden">

            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
             {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )
}