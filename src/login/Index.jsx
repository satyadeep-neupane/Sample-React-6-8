function Index(){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Index;