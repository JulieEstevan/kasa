function Host ({user}) {
    return (
       <div className="host">
        <img src={user.host.picture} alt="Proprietaire" className="host_img"/>
        <p>{user.host.name}</p>
    </div> 
    )
    
}

export default Host