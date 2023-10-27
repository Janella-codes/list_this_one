
import { experimental_useFormStatus as useFormStatus } from "react-dom"


export default function Button() {
    const { pending } = useFormStatus();

    return (
        <button className='px-4 py-2 bg-green-400 text-white rounded-md'>
            { pending ? 'Creating...' : 'Add'}
        </button>
    )
}   
