function Card({value, metric, name , icon}){
    return(
        <>
        <div className="flex h-[33.33%] items-center justify-between w-full">
                        <div className="flex items-center">
                        <i className={`fa-solid ${icon} text-[1.25vw] text-rose-50`}></i>
                        <p className="text-xl text-rose-50 ml-2 font-medium">{name}</p></div>
                        <h1 className="text-[1.1vw] text-rose-50">{value}{metric}</h1>
                    </div>
        </>
    )
}
export default Card