import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="container mx-auto my-16 w-[95vw] bg-white shadow-2xl p-4 max-w-[450px] rounded-xl">
            <h1 className="text-2xl capitalize text-center mb-8">sign in</h1>
            <form>
                <label className="block capitalize font-semibold my-2">username</label>
                <input className="form-control" type="text" placeholder="Username" />
                <label className="block capitalize font-semibold my-2">password</label>
                <input className="form-control" type="password" placeholder="Password" />
                <button className="my-4 shadow-lg shadow-slate-400 block border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit">sign in</button>
                <p>I forgot my password. <Link to="/resetpassword" className="capitalize text-blue-700">reset password</Link></p>
                <p>i don't have an account. <Link className="capitalize text-blue-700" to="/signup">sign up</Link></p>
            </form>
        </section>
    )
}

export default Login;