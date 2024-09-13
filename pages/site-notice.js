import Head from "next/head";

export default function SiteNotice() {
    return (
        <div>
            <Head>
                <title>Site Notice | Wp To NextJS</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="noindex" />
            </Head>
            <article className="bg-dark">
                <main className="max-w-7xl mx-auto text-white py-7 px-5 md:py-16">
                    <h1 className="font-source-sans text-4xl mb-5">Site Notice</h1>
                    <h2 className="font-source-sans text-2xl mb-7">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
                    <p className="font-montserrat mb-5">Hasan tariq<br />
                    https://hasan-port.vercel.app/<br />

                   Islamabad Pakistan </p>

                    <h2 className="font-source-sans mb-7 text-2xl">Contact</h2>
                    <p className="font-montserrat mb-5">Phone: 03469413675<br />
                    E-mail: hello@steindominik.de</p>



                    <h2 className="font-source-sans mb-7 text-2xl">Person responsible for editorial</h2>
                    <p className="font-montserrat mb-5">Hasan<br />
                    Islamabad Pakistan<br />
                   </p>


                </main>
            </article>
        </div>
    )
}
