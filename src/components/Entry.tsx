interface propsEntry { 
    type?: 'text' | 'number'
    text: string
    value: any
    onlyRead?: boolean
    onChange?: (value: any) => void
    className?: string

}

export default function Entry(props: propsEntry) { 
    return ( 
        <div className={`flex flex-col ${props.className}`} >
            <label className="mb-2">
            {props.text}
            </label>
            <input type={props.type ?? 'text'}
            value={props.value} 
            readOnly={props.onlyRead}
            className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-50 
            px-4 py-2 ${props.onlyRead ? '' : ' focus:bg-white'}
            `}
            onChange={e => props.onChange?.(e.target.value)}
            />
        </div>
    )
}