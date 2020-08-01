import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <div style={{ fontSize: "50px", color: "red" }}>
        <h1>About Next.js</h1>
        <Image />
        <Link href="/">
            <button>Back</button>
        </Link>
    </div>
)

export default About;