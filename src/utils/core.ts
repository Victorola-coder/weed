import Toast, { ToastType } from "react-native-toast-message";

export const CustomToaster = (
  type: ToastType,
  text: string,
  duration: number
) => {
  Toast.show({
    type: type,
    text1: text,
    position: "top",
    autoHide: true,
    visibilityTime: duration,
  });
};

export const getSimplifiedError = (error: any) => {
  if (!error.response) {
    // window.alert(
    //   "Something went wrong, check your internet and please try again"
    // );
    CustomToaster(
      "error",
      "Something went wrong, check your internet and please try again",
      1000
    );
    return "Something went wrong, check your internet and please try again";
  }
  if (error.response?.status === 500) {
    // window.alert("Sorry an unexpected error occurred.");
    CustomToaster("error", "Sorry an unexpected error occurred.", 1000);
    return "Sorry an unexpected error occurred.";
  }
  if (error.response?.status === 400) {
    console.log(error.response);
    // window.alert(error.response.data.error);
    CustomToaster("error", error.response.data.error, 1000);

    // window.location.reload();
  }
  if (error.response.status === 404) {
    CustomToaster("error", error.response.error, 1000);

    if (error.response.data.error === "user not found") {
      setTimeout(() => {
        CustomToaster("error", "user not found", 1000);
        //   window.location.replace("/register");
      }, 1000);
    }
    return error.response.data.error;
  } else if (error.response.status === 401) {
    // window.alert("Token has expired, please log in");
    // toast.error("Token has expired, please log in");
    // setTimeout(() => {
    //   window.location.replace("/login");
    // }, 1000);
    return "Token has expired, please log in";
  } else if (error.response.status === 409) {
    // window.alert(error.response.data.error);
    CustomToaster("error", error.response.data.error, 1000);

    //   toast.error(error.response.data.error);
    setTimeout(() => {
      // window.location.replace("/login");
    }, 500);
    return error.response.data.error;
  } else {
    // window.alert(error.response.data.error);
    CustomToaster("error", error.response.data.error, 1000);

    // window.location.reload();
    return error.response.data.error;
  }
};
