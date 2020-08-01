import Link from 'next/link';
const Index = () => (
    <div>
        <h1>Hi Jeremy, welcome to Next.js</h1>
        <div>
            {/* server side rendering */}
            <a href="/about">About Page (Server Side Rendering)</a>
        </div>

        {/* client side rendering */}
        <Link href="/about">
            <a>About Page (Client Side Rendering)</a>
        </Link>
        <div>
            <Link href="/robots">
                <button>Robots</button>
            </Link>
        </div>
    </div>
)

export default Index;