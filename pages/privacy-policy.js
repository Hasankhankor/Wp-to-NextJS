import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | WPtoNext</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website." />
        <meta name="robots" content="noindex" />
      </Head>
      <article className="bg-dark">
        <main className="max-w-7xl mx-auto text-white py-7 px-5 md:py-16">
          <h1 className="font-source-sans text-4xl mb-5">Privacy Policy</h1>
          <h2 className="font-source-sans text-2xl mb-7">1. An overview of data protection</h2>
          <h3 className="font-source-sans text-2xl mb-7">General information</h3>
          <p className="font-montserrat mb-5">
            The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you.
          </p>
          <h3 className="font-source-sans text-2xl mb-7">Data recording on this website</h3>
          <h4 className="font-source-sans text-2xl mb-5">Who is the responsible party for the recording of data on this website?</h4>
          <p className="font-montserrat mb-5">
            The data on this website is processed by the operator of the website. For inquiries related to data protection, please contact Hassan at hkhankor@gmail.com.
          </p>
          <h4 className="font-source-sans text-2xl mb-7">How do we record your data?</h4>
          <p className="font-montserrat mb-5">
            We collect your data as a result of your sharing of your data with us, such as information you enter into our contact form. Other data is recorded automatically by our IT systems when you visit this website (e.g., browser type, operating system, access time).
          </p>
          <h4 className="font-source-sans text-2xl mb-7">What are the purposes we use your data for?</h4>
          <p className="font-montserrat mb-5">
            Some data is collected to ensure the proper functioning of the website. Other data may be used to analyze user behavior.
          </p>
          <h4 className="font-source-sans text-2xl mb-7">What rights do you have regarding your data?</h4>
          <p className="font-montserrat mb-5">
            You have the right to request information about your stored data, its origin, recipients, and the purpose of its collection. You may also request correction or deletion of your data.
          </p>
          <p className="font-montserrat mb-5">
            For any questions regarding privacy or data protection, please contact Hassan at hkhankor@gmail.com.
          </p>
        </main>
      </article>
    </div>
  );
}
