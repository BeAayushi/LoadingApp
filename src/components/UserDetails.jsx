import "./UserDetails.css"
function UserDetails({list}){ 
    
    return (
      <div className="container">
        {list.map((element) => (
          <div className="content-container">
        
            <img src={"https://joeschmoe.io/api/v1/"+element.first} alt="user"></img>
            <h1>
            
              {element.first}
              {element.last}
            </h1>
            <h2>{element.email}</h2>
            <h3>{element.address}</h3>
          </div>
        ))}
      </div>
    );
}

export default UserDetails