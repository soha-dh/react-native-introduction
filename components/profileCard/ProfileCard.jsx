import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://picsum.photos/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>Codiko theDev</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            provident incidunt, tempora ea aspernatur inventore debitis iste
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="instagram" size={24} color="#FF477C" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="comment" size={24} color="#1cd2ef" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="phone" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
