const UserCard = ({image, fullName, email,age,gender}) => {
    return(
        <div>
            <img src={image} alt ={`${fullName} profile`}/>
            <h2> {fullName}</h2>
            <h3>{email}</h3>
            <p>{age}</p>
            <p>{gender}</p>
            
            
    
        </div>
    )
}

export default UserCard;