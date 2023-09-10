
const Formbtn = ({title, loading}) => {
    return (
        <button disabled={loading ? true : false} className={`rounded-full flex items-center gap-3 py-3 px-6 capitalize text-sm ${loading ? 'bg-[#000] hover:bg-slate-500 text-white' : 'bg-[#9f1772] hover:bg-[#9f1772]/75 text-white'}`}>{title} {loading && <div className="spins"></div>} </button>
    )
}

export default Formbtn
