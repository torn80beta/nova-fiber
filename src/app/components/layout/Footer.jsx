"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-360 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full min-h-115.5 py-20 px-5 sm:px-10 md:px-20 bg-[#F7F7F7] flex flex-col items-center justify-center">
        <div className="w-full h-full grow grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
          {/* Google map */}
          <div className="flex flex-col items-center  gap-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190640.5391567822!2d-88.17664205!3d41.704150500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4fd82fdf19c4ef99%3A0xc0901d66ae617089!2sNovaFiber%20LLC!5e0!3m2!1sru!2sua!4v1776800188308!5m2!1sru!2sua"
              title="Google Map"
              className="border-0 max-w-150 w-full min-h-112.5 h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            id="contacts"
            className="h-full flex flex-col items-center justify-between gap-10 "
          >
            <div className="flex flex-row items-start justify-center gap-10 sm:gap-40 ">
              {/* Contacts */}
              <div className="min-h-fit flex flex-col gap-4">
                <p className="mb-2 text-amber-600 text-xl">Contacts</p>

                {/* Address */}
                <p>Bolingbrook, IL, United States</p>
                <p>Illinois 60440</p>

                {/* Telephone */}
                <a
                  href="tel:+13312537855"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/telephone.svg"}
                    alt="Tel"
                    width={20}
                    height={20}
                  />
                  <p>+1 (331) 253-7855</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:novafiberllc@gmail.com"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/email.svg"}
                    alt="Email"
                    width={20}
                    height={20}
                  />
                  <p>novafiberllc@gmail.com</p>
                </a>
              </div>

              {/* Social media links */}
              <div className="min-h-fit flex flex-col gap-4 mb-10">
                <p className="mb-2 text-amber-600 text-xl">Follow Us</p>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61576447468204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/facebook.svg"}
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                  <p>Facebook</p>
                </a>
                {/* Twitter-X */}
                {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-row items-center gap-2.5"
              >
                <Image
                  src={"/svg/x-twitter.svg"}
                  alt="X"
                  width={20}
                  height={20}
                />
                <p>Twitter</p>
              </a> */}
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/novafiberllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/instagram.svg"}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                  <p>Instagram</p>
                </a>

                <p className="mb-2 mt-5 text-amber-600 text-xl">Text Us</p>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/13312537855"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/whatsapp.svg"}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  <p>WhatsApp</p>
                </a>

                <a
                  href="sms:+13312537855"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/sms.svg"}
                    alt="Sms"
                    width={20}
                    height={20}
                  />
                  <p>+13312537855</p>
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <a
                href="https://sites.google.com/view/novafiberllcprivacypolicy/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
              <p>&copy; {new Date().getFullYear()} NovaFiber LLC.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
