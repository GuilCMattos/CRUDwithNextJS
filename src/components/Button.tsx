interface propsButton { 
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: propsButton) { 

    const color = props.color ?? 'gray'

    return(
        <button className={`
            px-4 py-2 rounded-md
            bg-gradient-to-r from-green-400 to-green-700
            text-white 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}