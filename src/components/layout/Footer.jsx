import Link from "next/link";

const footerLinks = {
    Product: [
        { label: "CV Templates", href: "/cv-templates" },
        { label: "CV Examples", href: "/cv-examples" },
        { label: "Cover Letter", href: "/cover-letter" },
        { label: "AI CV Builder", href: "/create-cv" },
    ],

    Resources: [
        { label: "Career Guide", href: "/career-guide" },
        { label: "Resume Tips", href: "/resume-tips" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
    ],

    Company: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Pricing", href: "/pricing" },
    ],

    Legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-tight text-white"
                        >
                            CV<span className="text-emerald-500">Builder</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                            Create a professional, ATS-friendly CV with beautiful
                            templates and AI-powered content suggestions.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            <SocialLink
                                href="#"
                                label="Facebook"
                                icon={
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
                                    </svg>
                                }
                            />

                            <SocialLink
                                href="#"
                                label="Twitter"
                                icon={
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.9-6.4L6.5 22H3.4l7.3-8.4L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.7h1.7L8.4 4.2H6.6l11.2 15.5Z" />
                                    </svg>
                                }
                            />

                            <SocialLink
                                href="#"
                                label="LinkedIn"
                                icon={
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6.9 8.4H3.5V20h3.4V8.4ZM5.2 3A2 2 0 1 0 5.2 7a2 2 0 0 0 0-4ZM20.5 13.3c0-3.5-1.9-5.1-4.5-5.1-2.1 0-3 1.2-3.5 2v-1.8H9.1V20h3.4v-5.8c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1V20h3.4l.1-6.7Z" />
                                    </svg>
                                }
                            />

                            <SocialLink
                                href="#"
                                label="GitHub"
                                icon={
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.4.7 1.1.7 2.2v3.2c0 .3.2.6.7.5A10 10 0 0 0 22 12C22 6.5 17.5 2 12 2Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-sm font-semibold text-white">
                                    {title}
                                </h3>

                                <ul className="mt-5 space-y-3">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-400 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-gray-800" />

                {/* Bottom Footer */}
                <div className="flex flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} CVBuilder. All rights reserved.
                    </p>

                    <p>
                        Built with{" "}
                        <span className="font-medium text-gray-400">
                            AI &amp; modern web technology
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* Social Link Component */
function SocialLink({ href, label, icon }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition hover:border-gray-700 hover:bg-gray-800 hover:text-white"
        >
            {icon}
        </Link>
    );
}
