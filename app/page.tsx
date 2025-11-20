import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <h1 className="text-center mt-8 text-4xl">ANANTH VENKATESH</h1>

      <div className="flex justify-center mt-8">
        <Image
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
          src="/ananthdp-min.jpg"
          alt="Ananth Venkatesh"
          className="rounded-full"
        />
      </div>

      <div className="max-w-3xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-semibold mt-8">Hi</h2>
        <p>I&apos;m Ananth. I love music, tech, food &amp; memes.</p>

        <h2 className="text-2xl font-semibold mt-8">Work</h2>
        <p>
          <br />
          I&apos;m the Founder &amp; Director at{" "}
          <Link
            href="https://anriti.tech"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Anriti
          </Link>
          , a boutique tech consultancy where we help businesses build and scale
          their technology infrastructure.
          <br />
          <br />
          I run{" "}
          <Link
            href="https://www.smritisspecial.in/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Smriti&apos;s Special
          </Link>
          , one of the leading Online Pastry Schools in India. I created{" "}
          <Link
            href="https://www.alignerjunction.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Aligner Junction
          </Link>
          , where we&apos;re revolutionizing the dental aligner experience for
          dentists and reviewers (available on{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.app.aligner_junction"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Android
          </Link>{" "}
          and{" "}
          <Link
            href="https://apps.apple.com/us/app/aligner-junction/id6741702938"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            iOS
          </Link>
          ), and{" "}
          <Link
            href="https://www.dotweave.in/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            DotWeave
          </Link>
          , where we empower sales with data intelligence and transform sales
          processes with actionable insights and smart automation.
          <br />
          <br />
          Before this, I worked at{" "}
          <Link
            href="https://arthmate.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Arthmate
          </Link>{" "}
          as Head of Engineering where I took care of the entire stack of
          financial products like Loan Origination, Management, Collections, Risk
          Management, etc.
          <br />
          <br />
          Before that, I worked at{" "}
          <Link
            href="https://dotpe.in/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            DotPe
          </Link>{" "}
          as a Technical Lead where we were making end-to-end restaurant
          management solutions.
          <br />
          <br />
          Before that, I worked at{" "}
          <Link
            href="https://www.ycombinator.com/companies/redcarpetup"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            RedCarpet
          </Link>{" "}
          as an Engineering Manager where we helped to expand access to credit
          for the Next Billion Users.
          <br />
          <br />
          Before that, I co-founded{" "}
          <Link
            href="http://techcircle.vccircle.com/2015/12/07/the-party-has-just-started-say-nightlife-aggregators/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            InstaBounce
          </Link>{" "}
          (Delhi&apos;s leading nightlife discovery &amp; booking app).
          <br />
          <br />
          I&apos;ve also made a cool utility app,{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=diy.antweb9.directsapp&hl=en"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Directsapp
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8">Music</h2>
        <p>
          I play guitar for Delhi based Progressive Rock band,{" "}
          <Link
            href="https://www.instagram.com/vahakamusic/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Vāhaka
          </Link>
          .
          <br />
          <br />
          You can stream our music here -{" "}
          <Link
            href="https://linktr.ee/vahaka"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Buying / Streaming Links
          </Link>
          .
          <br />
          <br />
          I have done the score for over 10 short films and multiple product
          jingles. Completed a TV Show called{" "}
          <Link
            href="https://www.youtube.com/watch?v=qUuak4aw_A8"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Flavours of Shree Anna
          </Link>{" "}
          for DD National. You can find my non-band musical endeavours on my{" "}
          <Link
            href="https://soundcloud.com/antweb9"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Soundcloud
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.youtube.com/user/antweb09"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Youtube
          </Link>{" "}
          page. Also, here is the last film I worked on,{" "}
          <Link
            href="http://newspeakfilms.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Snare - Short Film
          </Link>
          .
          <br />
          <br />
          I&apos;ve also made a music utility app called{" "}
          <Link
            href="http://accelonome.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Accelonome
          </Link>
          . It has helped 1500+ musicians across the globe improve their
          practice sessions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact me</h2>
        <p>
          You can reach me on{" "}
          <Link
            href="https://twitter.com/antweb9"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </Link>
          . I&apos;m a nice guy.
        </p>

        <link
          href="https://fonts.googleapis.com/css?family=Cookie"
          rel="stylesheet"
        />
        <a
          className="bmc-button"
          target="_blank"
          href="https://www.buymeacoffee.com/antweb"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style={{ marginLeft: "15px", fontSize: "28px" }}>
            Buy me a beer / coffee
          </span>
        </a>
      </div>
    </div>
  );
}
