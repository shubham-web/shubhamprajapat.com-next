import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import svgs from "./../components/svgs";
export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p className={utilStyles.headingMd} style={{ textAlign: "justify" }}>
					Hi there, I'm Shubham. A professional full stack web developer for last 3 years.{/*  Constantly learning and improving web development skills since 2015. */}
				</p>
				<div>
					<h2 className={utilStyles.headingMd}>Area of Expertise</h2>
					<ul className={utilStyles.list}>
						<li className={utilStyles.listItem}>Vanilla JavaScript ❤</li>
						<li className={utilStyles.listItem}>
							<a target="_blank" rel="noopener" href="https://www.mongodb.com/mern-stack">
								MERN Stack
							</a>
						</li>
						<li className={utilStyles.listItem}>NextJS</li>
						<li className={utilStyles.listItem}>DevOps</li>
					</ul>
				</div>
			</section>
			<p>Currently, I'm not open for any full time work but feel free to reach me out for any help or just to say "Hi".</p>
			<div className={utilStyles.footerBtnGroup}>
				<a
					className="nostyle"
					target="_blank"
					href={`https://wa.me/+918319505750?text=${encodeURIComponent("Hi Shubham!")}`}
					className={utilStyles.footerButton}
					style={{ background: "rgb(37, 211, 102)", color: "white", borderColor: "rgb(37, 211, 102)" }}
				>
					{svgs.whatsAppIcon}
				</a>
				<a
					className="nostyle"
					target="_blank"
					href="skype:live:.cid.35702db707b292e9?chat"
					className={utilStyles.footerButton}
					style={{ background: "#00aff0", color: "white", borderColor: "#00aff0" }}
				>
					{svgs.skypeIcon}
				</a>
				<a className="nostyle" target="_blank" href="https://buymeacoffee.com/shubhamp" className={utilStyles.footerButton} style={{ background: "#fd0", color: "white", borderColor: "#fd0" }}>
					{svgs.coffeeIcon}
				</a>
			</div>
		</Layout>
	);
}
