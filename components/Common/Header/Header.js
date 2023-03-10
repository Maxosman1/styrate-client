import Link from "next/link";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
    return (
        <HeaderContainer className="center">
            <nav>
                <ul>
                    <li><Link href="/"><h2>STYRATE</h2></Link></li>
                    <li><Link href="/">Reviews</Link></li>
                    <li><Link href="/create">Create</Link></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;