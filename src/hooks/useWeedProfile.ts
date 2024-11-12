import { AuthStackParamsList } from "@/routes/types";
import { useAppDispatch } from "@/store";
import { setupWeedProfile } from "@/thunks/weedProfileThunk";
import { CustomToaster } from "@/utils/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

const useWeedProfile = (navigation: any, screenName?: string) => {
  const dispatch = useAppDispatch();
  const [isImageUploaded, setIsImageUploaded] = useState<string | null>(null);
  const [weedname, setWeedName] = useState("");
  const [weedbio, setWeedBio] = useState("");
  const [selectedCannabisStrain, setSelectedCannabisStrain] = useState<
    string[]
  >([]);
  const [overlayVisible, setOverlayVisible] = useState(false);

  // effects
  const [selectedStrainEffects, setSelectedStrainEffects] = useState<string[]>(
    []
  );
  const [othersStrainEffects, setOthersStrainEffects] = useState<string>("");
  // properties
  const [selectedCannbisProperty, setSelectedCannbisProperty] = useState<
    string[]
  >([]);
  const [othersCannbisProperty, setOthersCannbisProperty] =
    useState<string>("");

  // methods section
  const [selectedCannbisMethod, setSelectedCannbisMethod] = useState<string[]>(
    []
  );
  const [othersCannbisMethod, setOthersCannbisMethod] = useState<string>("");

  const isValidStuff =
    isImageUploaded === "" ||
    weedbio === "" ||
    weedname === "" ||
    (selectedCannbisMethod.length === 0 && othersCannbisMethod.trim() === "") ||
    (selectedCannbisProperty.length === 0 &&
      othersCannbisProperty.trim() === "") ||
    (selectedStrainEffects.length === 0 && othersStrainEffects.trim() === "") ||
    selectedCannabisStrain.length === 0;

  const data = {
    image: isImageUploaded,
    weedname,
    weedbio,
    whatStrain: { selectedOption: selectedCannabisStrain.join("") },
    whatEffect: {
      selectedOption: selectedStrainEffects.join("") || othersStrainEffects,
    },
    describeAroma: {
      selectedOption: selectedCannbisProperty.join("") || othersCannbisProperty,
    },
    method: {
      selectedOption: selectedCannbisMethod.join("") || othersCannbisMethod,
    },
  };
  const handleSignupWeedProfile = async () => {
    if (isValidStuff) {
      setOverlayVisible(true);
      CustomToaster(
        "error",
        "Please enter information about your weed profile",
        2500
      );
      return;
    }
    try {
      const res = await dispatch(setupWeedProfile(data)).unwrap();
      if (res?._id) {
        navigation.navigate("app-stack");
      }
      console.log(res, "qsdfghbnmkjhntgfhgfhjk");
    } catch (error: any) {
      if (error.error === "You can only create up to 3 profiles") {
        navigation.navigate("app-stack");
      }
      console.log(error, "ffffff");
      console.log("errorrr");
    }
  };
  const handleAddProfile = async () => {
    if (isValidStuff) {
      setOverlayVisible(true);
      CustomToaster(
        "info",
        " You need to fill in your data before you can add another weed profile",
        2000
      );
      return;
    }
    try {
      const res = await dispatch(setupWeedProfile(data)).unwrap();
      if (res?._id) {
        navigation.navigate(screenName);
      }
      console.log(res, "qsdfghbnmkjhntgfhgfhjk");
    } catch (error: any) {
      if (error.error === "You can only create up to 3 profiles") {
        navigation.navigate("app-stack");
      }
      console.log(error, "ffffff");
    }
  };

  return {
    isValidStuff,
    handleSignupWeedProfile,
    handleAddProfile,
    isImageUploaded,
    setIsImageUploaded,
    weedname,
    setWeedName,
    weedbio,
    setWeedBio,
    selectedCannabisStrain,
    setSelectedCannabisStrain,
    overlayVisible,
    setOverlayVisible,
    selectedStrainEffects,
    setSelectedStrainEffects,
    othersStrainEffects,
    setOthersStrainEffects,
    selectedCannbisProperty,
    setSelectedCannbisProperty,
    othersCannbisProperty,
    setOthersCannbisProperty,
    selectedCannbisMethod,
    setSelectedCannbisMethod,
    othersCannbisMethod,
    setOthersCannbisMethod,
  };
};

export default useWeedProfile;
