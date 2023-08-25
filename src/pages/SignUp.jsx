import { Link } from "react-router-dom";

export default function SignUp () {
    return (
        <section className="container mx-auto my-8 w-[95vw] bg-white shadow-2xl p-4 max-w-[450px] rounded-xl">
            <h1 className="text-2xl capitalize text-center mb-8">sign up</h1>
            <form>
                <label className="block capitalize font-semibold my-2">email</label>
                <input className="form-control" type="text" placeholder="Email" />
                <label className="block capitalize font-semibold my-2">username</label>
                <input className="form-control" type="text" placeholder="Username" />
                <label className="block capitalize font-semibold my-2">password</label>
                <input className="form-control" type="password" placeholder="Password" />
                <label className="block capitalize font-semibold my-2">retype password</label>
                <input className="form-control" type="password" placeholder="Retype password" />
                <button className="my-4 shadow-lg shadow-slate-400 block border-2 rounded-full py-1 capitalize px-4 bg-blue-700 hover:bg-blue-900 text-white"  type="submit">sign up</button>
                <p>I have an account. <Link className="capitalize text-blue-700" to="/login">sign in</Link></p>
            </form>
        </section>
    )
}