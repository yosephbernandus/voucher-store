import SideBar from "../../components/organisms/SideBar";
import Input from "../../components/atoms/Input";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function EditProfile() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        avatar: '',
    })
    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            const jwtToken = atob(token);
            const payload: JWTPayloadTypes = jwtDecode(jwtToken);
            const user: UserTypes = payload.player;
            setUser(user);
        }
    }, []);
    const IMG = process.env.NEXT_PUBLIC_IMG;

    return (
        <section className="edit-profile overflow-auto">
            <SideBar activeMenu="settings" />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                    <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                        <form action="">
                            <div className="photo d-flex">
                                <div className="image-upload">
                                    <label htmlFor="avatar">
                                        <img src={`${IMG}/${user.avatar}`} className="rounded-circle" alt="Icon Upload" width="90" height="90" style={{ borderRadius: '100%' }} />
                                    </label>
                                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                                </div>
                            </div>
                            <div className="pt-30">
                                <Input label="Full Name" value={user.name} />
                            </div>
                            <div className="pt-30">
                                <Input label="Email Address" disabled value={user.email} />
                            </div>
                            {/* <div className="pt-30">
                                <Input label="Phone" />
                            </div> */}
                            <div className="button-group d-flex flex-column pt-50">
                                <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                    role="button">Save My Profile</button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </section>
    )
}
