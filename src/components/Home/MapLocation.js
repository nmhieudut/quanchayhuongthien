import {
  Box,
  Divider,
  Flex,
  Text,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import Heading from "../Heading";
import { AiOutlineWifi } from "react-icons/ai";
import { RiTakeawayFill } from "react-icons/ri";
import { SiMyspace } from "react-icons/si";
import { MdSmokeFree } from "react-icons/md";
import { FaCalendarCheck, FaShippingFast } from "react-icons/fa";
import Section from "../Section";
import { color } from "src/constants/color";
const data = [
  {
    icon: <AiOutlineWifi />,
    label: "Có wifi",
    enable: true,
    tooltipText: "Wifi"
  },
  {
    icon: <FaCalendarCheck />,
    label: "Có đặt trước",
    enable: true,
    tooltipText: "Đặt trước"
  },
  {
    icon: <FaShippingFast />,
    label: "Ship hàng",
    enable: false,
    tooltipText: "Không ship hàng"
  },
  {
    icon: <RiTakeawayFill />,
    label: "Cho mua về",
    enable: true,
    tooltipText: "Đem về"
  },
  {
    icon: <SiMyspace />,
    label: "20 người",
    enable: true,
    tooltipText: "Sức chứa"
  },
  {
    icon: <MdSmokeFree />,
    label: "Hút thuốc",
    enable: false,
    tooltipText: "Không có chỗ hút thuốc"
  }
];

export default function MapInfomation() {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Section>
      <Box className="semi-container h-auto">
        <Heading label="Thông tin & bản đồ" />
        <Box bg={bg} className="my-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.4299976601507!2d108.48965744382569!3d15.56812399009565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dce834d46683%3A0xacf6f2ad7e32cc31!2zMzI0IFBoYW4gQ2jDonUgVHJpbmgsIFBoxrDhu51uZyBQaMaw4bubYyBIw7JhLCBUYW0gS-G7sywgUXXhuqNuZyBOYW0sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1630575705126!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          />
          <div className="flex flex-col items-star md:grid md:grid-cols-3 md:gap-4 px-12 py-4">
            {data.map(({ icon, label, enable, tooltipText }, i) => (
              <Tooltip
                key={i}
                label={tooltipText}
                hasArrow
                placement="top-start"
              >
                {enable ? (
                  <Flex align="center" className="cursor-pointer pb-4 md:pb-0">
                    <span style={{ color: color.primary }}>{icon}</span>
                    <Text className="ml-4" color={color.primary}>
                      {label}
                    </Text>
                  </Flex>
                ) : (
                  <Flex
                    align="center"
                    key={i}
                    className="line-through cursor-pointer opacity-50 pb-4 md:pb-0"
                  >
                    <span>{icon}</span>
                    <span className="ml-4">{label}</span>
                  </Flex>
                )}
              </Tooltip>
            ))}
          </div>
        </Box>
      </Box>
    </Section>
  );
}
