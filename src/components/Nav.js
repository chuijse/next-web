
import Link from 'next/link'

const routes = [
    {name:"Home", path: "/"},
    {name:"About", path: "/about"}
]

console.log(routes)

export default function Nav() {
    return(
        <nav>
            <ul>
                {routes.map((route, i) => (
                    <li key={`link-${route.name}-${i}`}>
                        <Link href={route.path}  >
                        <a>{route.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}