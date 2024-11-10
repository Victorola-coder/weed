import { useAppDispatch } from "@/store";
import {
  favouriteWayAsync,
  setupEffectCanaAsync,
  setupEnjoyCanAsync,
  setupOftenIndulgeAsync,
  setupPreferBalanceAsync,
  setupPreferredStrainAsync,
  setupRecreOrMedAsync,
} from "@/thunks/profileThunks";
import { CustomToaster } from "@/utils/core";
import { useState } from "react";

const useProfile = () => {
  const [isImageUploaded, setIsImageUploaded] = useState<string | null>(null);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>([]);
  const [selectedStrainType, setSelectedStrainType] = useState<string[]>([]);
  const [selectedBalancedStrains, setSelectedBalancedStrains] = useState<
    string[]
  >([]);
  const [selectedEffectCann, setSelectedEffectCann] = useState<string[]>([]);
  const [selectedUsertype, setSelectedUsertype] = useState<string[]>([]);
  const [selectedEnjoyableCanna, setSelectedEnjoyableCanna] = useState<
    string[]
  >([]);
  const [selectedWeedType, setSelectedWeedType] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const apiCalls = async (currentPage: number) => {
    try {
      let result;
      switch (currentPage) {
        case 0:
          if (isImageUploaded) {
            const formData = new FormData();
            formData.append("image", isImageUploaded);
            result = true;
            // console.log(formData?._parts[0], "hgfddd");
            // result = await dispatch(
            //   uploadImageAsync(formData?._parts[0])
            // ).unwrap();
          }
          break;
        case 1:
          if (selectedLabels.length > 0) {
            result = await dispatch(
              favouriteWayAsync({ selectedOption: selectedLabels.join("") })
            ).unwrap();
          }
          break;
        case 2:
          if (selectedFrequency.length > 0) {
            result = await dispatch(
              setupOftenIndulgeAsync({
                selectedOption: selectedFrequency.join(""),
              })
            ).unwrap();
          }
          break;
        case 3:
          if (selectedStrainType.length > 0) {
            result = await dispatch(
              setupPreferredStrainAsync({
                selectedOption: selectedStrainType.join(""),
              })
            ).unwrap();
          }
          break;
        case 4:
          if (selectedBalancedStrains.length > 0) {
            result = await dispatch(
              setupPreferBalanceAsync({
                selectedOtion: selectedBalancedStrains.join(""),
              })
            ).unwrap();
          }
          break;
        case 5:
          if (selectedEffectCann.length > 0) {
            result = await dispatch(
              setupEffectCanaAsync({
                selectedOption: selectedEffectCann.join(""),
              })
            ).unwrap();
          }
          break;
        case 6:
          if (selectedUsertype.length > 0) {
            // First API call
            const firstResult = await dispatch(
              setupRecreOrMedAsync({
                selectedOption: selectedUsertype.join(""),
              })
            ).unwrap();
            console.log(firstResult, "pepeeoieoeejeien");
            if (firstResult?._id && selectedEnjoyableCanna.length > 0) {
              // Second API call, only if the first one is successful
              result = await dispatch(
                setupEnjoyCanAsync({
                  selectedOption: selectedEnjoyableCanna.join(""),
                }) // Replace with your second endpoint
              ).unwrap();
            } else {
              CustomToaster("error", "Could not upload", 2000);
              // console.error("First API call failed, skipping the second call.");
              return false;
            }
          }
          break;
        case 7:
          if (selectedWeedType.length > 0) {
            // const formData = new FormData();
            // formData.append("image", isImageUploaded);
            result = true;
            // console.log(formData?._parts[0], "hgfddd");
            // result = await dispatch(
            //   uploadImageAsync(formData?._parts[0])
            // ).unwrap();
          }
          break;
        default:
          result = { success: true };
      }
      return result;
    } catch (error) {
      console.error(`API call failed for page ${currentPage}:`, error);
      return false;
    }
  };
  const getWidthClass = (currentPage: number) => {
    switch (currentPage) {
      case 1:
        return "w-weed-3.4";
      case 2:
        return "w-weed-6.8";
      case 3:
        return "w-weed-10.3";
      case 4:
        return "w-weed-13.7";
      case 5:
        return "w-weed-17.1";
      case 6:
        return "w-weed-20.6";
      default:
        return "w-0";
    }
  };

  const isNextButtonDisabled = (currentPage: number) => {
    switch (currentPage) {
      case 0:
        return !isImageUploaded;
      case 1:
        return selectedLabels.length === 0;
      case 2:
        return selectedFrequency.length === 0;
      case 3:
        return selectedStrainType.length === 0;
      case 4:
        return selectedBalancedStrains.length === 0;
      case 5:
        return selectedEffectCann.length === 0;
      case 6:
        return (
          selectedUsertype.length === 0 || selectedEnjoyableCanna.length === 0
        );
      case 7:
        return selectedWeedType.length === 0;
      default:
        return false;
    }
  };

  return {
    apiCalls,
    isNextButtonDisabled,
    getWidthClass,
    isImageUploaded,
    setIsImageUploaded,
    selectedLabels,
    setSelectedLabels,
    selectedFrequency,
    setSelectedFrequency,
    selectedStrainType,
    setSelectedStrainType,
    selectedBalancedStrains,
    setSelectedBalancedStrains,
    selectedEffectCann,
    setSelectedEffectCann,
    selectedUsertype,
    setSelectedUsertype,
    selectedEnjoyableCanna,
    setSelectedEnjoyableCanna,
    selectedWeedType,
    setSelectedWeedType,
  };
};

export default useProfile;
