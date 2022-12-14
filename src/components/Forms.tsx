import { useState } from "react";
import Entry from "./Entry";
import Button from './Button'
import Client from "../core/Client";

interface propsForm { 
    client: any
    clientChange?: (client: any) => void
    cancel?: () => void

}

export default function Form(props: propsForm) { 
    const id = props.client?.id 

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)


    return ( 
        <div>
            {id ? ( 
                <Entry onlyRead={true} className="mb-4"  text="Código" value={id} type="text" />
            ) : false}
            <Entry text="Nome" className="mb-4" value={name} onChange={setName} type="text" />
            <Entry text="Idade" value={age} onChange={setAge} type="number" />

            <div className="mt-7 flex justify-end">
                <Button className="mr-2 from-blue-600 to-blue-800 " onClick={() => props.clientChange?.(new Client(name, +age, id))}>
               {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel} className=" from-gray-600 to-gray-800 "> Cancelar </Button>
            </div>
        </div>
    )
}