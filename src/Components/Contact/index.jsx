import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="mt-5 px-4 sm:px-8 md:px-16 lg:px-32">
            <p className="text-center text-sm">
                While we put the final touches on it, you can still reach out to us to
                get started today. Simply click the button below to contact us and
                explore our services.
            </p>

            {/* Contact Button */}
            <div className="flex justify-center">
                <a href={`https://wa.me/254759746906`} target="_blank" rel="noreferrer">
                    <button className="bg-[#E4B61A] px-6 py-3 mt-5 rounded-md text-white text-lg sm:text-xl font-semibold shadow-md transition-transform duration-300 hover:scale-105">
                        Contact Us
                    </button>
                </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 md:mt-8 py-5">
                <a
                    href="https://www.tiktok.com/@anikastyleske"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl transition-transform duration-300 hover:scale-110"
                >
                    <FaTiktok />
                </a>
                <a
                    href="https://www.instagram.com/anika_styles__wigs/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E4405F] text-3xl transition-transform duration-300 hover:scale-110"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://wa.me/254759746906"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#25D366] text-3xl transition-transform duration-300 hover:scale-110"
                >
                    <FaWhatsapp />
                </a>
            </div>

        </div>
    );
}
