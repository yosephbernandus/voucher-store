import Link from "next/link";
import Image from "next/image";
import FooterListItem from "../../molecules/FooterListItem";

export default function Footer() {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src="/icon/footer-icon.svg" width={60} height={60} alt="Footer icon" />
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                                pemenang sejati
                            </p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                                    <ul className="list-unstyled">
                                        <FooterListItem desc="About Us" />
                                        <FooterListItem desc="Press Release" />
                                        <FooterListItem desc="Terms of Use" />
                                        <FooterListItem desc="Privacy & Policy" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                                    <ul className="list-unstyled">
                                        <FooterListItem desc="Refund Policy" />
                                        <FooterListItem desc="Unlock Rewards" />
                                        <FooterListItem desc="Live Chatting" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                                    <ul className="list-unstyled">
                                        <FooterListItem href="mailto: hi@store.gg" desc="hi@store.gg" />
                                        <FooterListItem href="mailto: hi@store.gg" desc="team@store.gg" />
                                        <FooterListItem href="http://maps.google.com/?q=Pasific 12,Jakarta Selatan" desc="Pasific 12, Jakarta Selatan" />
                                        <FooterListItem desc="021 - 1122 - 9090" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
