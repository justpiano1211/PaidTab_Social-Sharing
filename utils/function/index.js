// import toast from "react-hot-toast";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  // toast("Successfully copied!");
};