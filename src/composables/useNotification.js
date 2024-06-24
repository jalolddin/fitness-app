import { Notify } from "quasar";

export const useNotification = () => {
  const showMessage = (
    messageText,
    messageType = "",
    timeout = 2000,
    position = "bottom"
  ) => {
    // messageType: warning, positive, negative, info,
    let options = {
      textColor: messageType !== "warning" ? "white" : "black",
      message: messageText,
      html: true,
      actions: [
        {
          icon: "close",
          color: messageType !== "warning" ? "white" : "black",
        },
      ],
      timeout,
      position,
    };
    if (messageType) {
      options.type = messageType;
    }
    Notify.create(options);
  };

  return {
    showMessage,
  };
};
