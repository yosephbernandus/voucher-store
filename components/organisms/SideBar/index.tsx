import Profile from "./Profile";
import Footer from "./Footer";

import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import Cookies from "js-cookie";


interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout'
}

export default function SideBar(props: SideBarProps) {
    const { activeMenu } = props;
    const router = useRouter();
    const onLogout = () => {
        Cookies.remove("token");
        router.push('/sign-in');
    }
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} href="/member" />
                    <MenuItem title="Transactions" icon="ic-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
                    <MenuItem title="Messages" icon="ic-menu-message" href="/member" />
                    <MenuItem title="Card" icon="ic-menu-card" href="/member" />
                    <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
                    <MenuItem title="Settings" icon="ic-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
                    <MenuItem title="Log Out" icon="ic-menu-logout" onClick={onLogout} />
                </div>
                <Footer />
            </div>
        </section>
    )
}
