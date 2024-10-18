import { HEIGHT } from "@/constants/Size";
import React, { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
interface CardData {
  id: number;
  userName: string;
  userImage: string;
  weedImage1: string;
  weedName1: string;
  weedBio1: string;
  weedBasics1: string[];
  weedImage2: string;
  weedName2: string;
  weedBio2: string;
  weedBasics2: string[];
  weedImage3: string;
  weedName3: string;
  weedBio3: string;
  weedBasics3: string[];
}
const WeedMatchCards = () => {
  const swiperRef = useRef<Swiper<CardData> | null>(null);

  const Card: CardData[] = [
    {
      id: 1,
      userName: "Thessa",
      userImage: require("../../../assets/image/ProfilePic.png"),
      weedImage1: require("../../../assets/image/upload.png"),
      weedName1: "PineApple Express",
      weedBio1:
        "All about Pineapple Express can be told or sent to you anytime of the day and can be sent to the other person.",
      weedBasics1: ["Sativa", "Energizing", "Sweet", "Indoor"],
      weedImage2: require("../../../assets/image/upload2.png"),
      weedName2: "Purple Haze",
      weedBio2: "Purple Haze can be sent with all its amazing properties.",
      weedBasics2: ["Indica", "Skunky", "Indoor", "Relaxing"],
      weedImage3: require("../../../assets/image/upload3.png"),
      weedName3: "White Widow",
      weedBio3: "White Widow is available in multiple forms.",
      weedBasics3: ["Fruity", "Euphoric", "Earthly", "Unsure"],
    },
    {
      id: 2,
      userName: "Elena",
      userImage: require("../../../assets/image/sam.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "OG Kush",
      weedBio1: "OG Kush can be found all day.",
      weedBasics1: ["Hybrid", "Relaxing", "Earthly", "Outdoor"],
      weedImage2: require("../../../assets/image/upload3.png"),
      weedName2: "Gelato Weed",
      weedBio2: "Gelato Weed is a top-tier selection.",
      weedBasics2: ["Indica", "Earthly", "Sweet", "Indoor"],
      weedImage3: require("../../../assets/image/upload.png"),
      weedName3: "Sour Diesel",
      weedBio3: "Sour Diesel has a pungent yet fruity aroma.",
      weedBasics3: ["Sativa", "Energizing", "Woody", "Greenhouse"],
    },
    {
      id: 3,
      userName: "Alex",
      userImage: require("../../../assets/image/rey.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Gorilla Glue",
      weedBio1: "Gorilla Glue is perfect for winding down your day.",
      weedBasics1: ["Hybrid", "Relaxing", "Sweet", "Hydropanic"],
      weedImage2: require("../../../assets/image/upload2.png"),
      weedName2: "Skywalker OG",
      weedBio2: "Skywalker OG is available for the adventurous.",
      weedBasics2: ["Indica", "Skunky", "Indoor", "Relaxing"],
      weedImage3: require("../../../assets/image/upload3.png"),
      weedName3: "Ak-47 Weed",
      weedBio3: "Ak-47 Weed has a robust and flavorful experience.",
      weedBasics3: ["Sativa", "Euphoric", "Floral", "Indoor"],
    },
    {
      id: 4,
      userName: "Chris",
      userImage: require("../../../assets/image/richie.png"),
      weedImage1: require("../../../assets/image/upload3.png"),
      weedName1: "Jack Herer Weed",
      weedBio1: "Jack Herer Weed is perfect for creative minds.",
      weedBasics1: ["Sativa", "Euphoric", "Citrusy", "Outdoor"],
      weedImage2: require("../../../assets/image/upload3.png"),
      weedName2: "Lemon Haze",
      weedBio2: "Lemon Haze is refreshing and energizing.",
      weedBasics2: ["Sativa", "Energizing", "Sweet", "Indoor"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Black Cherry Soda",
      weedBio3: "Black Cherry Soda is fruity and flavorful.",
      weedBasics3: ["Hybrid", "Euphoric", "Fruity", "Outdoor"],
    },
    {
      id: 5,
      userName: "Emma",
      userImage: require("../../../assets/image/user1.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Northern Lights",
      weedBio1: "Northern Lights is a calming indica.",
      weedBasics1: ["Indica", "Relaxing", "Earthly", "Greenhouse"],
      weedImage2: require("../../../assets/image/upload1.png"),
      weedName2: "White Widow",
      weedBio2: "White Widow is available for calming effects.",
      weedBasics2: ["Hybrid", "Creative", "Woody", "Indoor"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Blue Dream",
      weedBio3: "Blue Dream is known for its balanced effects.",
      weedBasics3: ["Sativa", "Relaxing", "Sweet", "Indoor"],
    },
    {
      id: 6,
      userName: "Liam",
      userImage: require("../../../assets/image/user2.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Girl Scout Cookies",
      weedBio1: "Girl Scout Cookies is known for its euphoric effects.",
      weedBasics1: ["Hybrid", "Euphoric", "Sweet", "Outdoor"],
      weedImage2: require("../../../assets/image/upload1.png"),
      weedName2: "OG Kush",
      weedBio2: "OG Kush is a classic choice for relaxation.",
      weedBasics2: ["Indica", "Relaxing", "Earthly", "Greenhouse"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Purple Hazard",
      weedBio3: "Purple Hazard delivers a powerful experience.",
      weedBasics3: ["Hybrid", "Energizing", "Spicy", "Indoor"],
    },
    {
      id: 7,
      userName: "Sophia",
      userImage: require("../../../assets/image/user8.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Purple Haze",
      weedBio1: "Purple Haze provides creative and uplifting effects.",
      weedBasics1: ["Sativa", "Creative", "Woody", "Outdoor"],
      weedImage2: require("../../../assets/image/upload1.png"),
      weedName2: "Alaskan Thunder",
      weedBio2: "Alaskan Thunder is perfect for an outdoor adventure.",
      weedBasics2: ["Hybrid", "Euphoric", "Fruity", "Greenhouse"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Pineapple Express",
      weedBio3: "Pineapple Express gives a sweet and earthy flavor.",
      weedBasics3: ["Sativa", "Energizing", "Sweet", "Indoor"],
    },
    {
      id: 8,
      userName: "Olivia",
      userImage: require("../../../assets/image/user9.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Sour Diesel",
      weedBio1: "Sour Diesel is a strong Sativa strain.",
      weedBasics1: ["Sativa", "Energizing", "Citrusy", "Outdoor"],
      weedImage2: require("../../../assets/image/upload1.png"),
      weedName2: "Northern Lights",
      weedBio2: "Northern Lights is perfect for a calming experience.",
      weedBasics2: ["Indica", "Relaxing", "Woody", "Greenhouse"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Ak-47",
      weedBio3: "Ak-47 has a well-balanced experience.",
      weedBasics3: ["Hybrid", "Euphoric", "Earthly", "Indoor"],
    },
    {
      id: 9,
      userName: "Jackson",
      userImage: require("../../../assets/image/ProfilePic.png"),
      weedImage1: require("../../../assets/image/upload1.png"),
      weedName1: "Skywalker OG",
      weedBio1: "Skywalker OG delivers a powerful indica high.",
      weedBasics1: ["Indica", "Relaxing", "Fruity", "Indoor"],
      weedImage2: require("../../../assets/image/upload1.png"),
      weedName2: "White Widow",
      weedBio2: "White Widow gives an energizing and euphoric feeling.",
      weedBasics2: ["Hybrid", "Energizing", "Sweet", "Outdoor"],
      weedImage3: require("../../../assets/image/upload1.png"),
      weedName3: "Lemon Haze",
      weedBio3: "Lemon Haze has a refreshing citrusy flavor.",
      weedBasics3: ["Sativa", "Energizing", "Citrusy", "Greenhouse"],
    },
  ];
  return (
    <View
      style={{ height: HEIGHT * 0.5, borderWidth: 1, overflow: "hidden" }}
      className="px-5"
    >
      <Swiper<CardData>
        ref={swiperRef}
        cards={Card}
        renderCard={(WeedCard) => (
          <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam placeat odio, a inventore eveniet autem magni, maxime
                tempora recusandae ipsum dolorum consequuntur esse repellendus!
                Ut officiis obcaecati nam numquam?
              </Text>
            </ScrollView>
          </View>
        )}
      ></Swiper>
    </View>
  );
};

export default WeedMatchCards;
