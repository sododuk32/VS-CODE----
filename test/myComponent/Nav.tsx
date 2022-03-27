import Link from 'next/link';

function Nav() {
    return (
        <div>
            <div className="sidevar">
                <ul>
                    <li>
                        <Link href="/testcom/admin-adjust/admin-adjust-pages">
                            <a>관리자 관리</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/testcom/admin-adjust/admin-info">
                            <a>관리자 정보</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/hello">
                            <a>hello</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Nav;
