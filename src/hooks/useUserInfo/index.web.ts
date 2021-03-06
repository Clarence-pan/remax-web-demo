import * as React from "react";

export default function useUserInfo() {
  const [user, setUser] = React.useState<any>(
    JSON.parse(window.localStorage.getItem("user") || "null")
  );
  function login() {
    const user = {
      nickName: "Guest",
      avatar: "https://placekitten.com/g/200/200"
    };

    window.localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  return [user, login];
}
