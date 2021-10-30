import Profile from "./Profile";
import Footer from "./Footer";

import MenuItem from "./MenuItem";


interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout'
}

export default function SideBar(props: SideBarProps) {
    const { activeMenu } = props;
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
                    <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
    )
}
