



export default function CreateAccount () {
    return ( 
        <div>
        <div className="login-Form" onSubmit={handleSubmit}>
            <form>
                <label htmlFor="firstName">Firstname: </label>
                <input type="text" placeholder="Firstname"></input>
                <label htmlFor="lastName"> Lastname: </label>
                <input type="text" placeholder="Lastname"></input>
                <label htmlFor="userName">Username: </label>
                <input type="text" placeholder="Username"></input>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password"></input>
                <label htmlFor="passwordValid">Re-enter password</label>
                <input type="passwordValid"></input>
                <button type="submit">Submit</button>
                <button type="cancel">Cancel</button>
            </form>       
        </div>
    </div>
    )
}