

interface LabelProps {
    name: string
}
export function Label(  { name }: LabelProps ) {
    return (
       <div className="flex-grow sm:flex-grow-0 px-3 py-1 bg-slate-200 text-black rounded-lg hover:font-bold duration-200">
            {name}
       </div>
    );
}