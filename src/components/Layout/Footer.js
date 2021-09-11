import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { color } from "src/constants/color";
import Section from "../Section";

export default function Footer() {
  return (
    <Section className="my-0">
      <div className="container flex flex-col md:grid md:grid-cols-3 md:grid-4 py-5">
        <div className="flex justify-center md:justify-start">
          <div className="flex flex-col mt-6 items-center">
            <div className="pt-4 flex flex-col">
              <div className="lg:flex lg:flex-wrap items-center">
                <div className="flex items-center justify-center lg:pr-2 lg:pb-0 pb-4 lg:border-r-2 border-r-0">
                  <Image
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    alt="footer logo"
                  />
                </div>
                <div className="ml-2 flex flex-col items-center lg:items-start">
                  <Text color={color.primary} className="text-xl font-bold">
                    Hương thiền
                  </Text>
                  <p>Quán chay</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col mt-6 items-center">
            <div className="footer-content__title">Nền tảng khác</div>
            <div className="flex">
              <a
                className="m-2"
                href="https://www.facebook.com/quanchay.huongthien"
                target="_blank"
                rel="noreferrer"
              >
                <SiFacebook size="1.5rem" />
              </a>
              <a
                className="m-2"
                href="https://www.instagram.com/hillrose_1509/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram size="1.5rem" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:justify-end">
          <div className="flex flex-col mt-6 items-start">
            <div className="footer-content__title">
              Thiết kế và phát triển bởi
              <a
                className="ml-2 transition transform text-red-500 hover:text-green-500"
                href="https://hieuhoahong.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <span>Hieu Hoa Hong</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
