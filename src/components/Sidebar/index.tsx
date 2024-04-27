"use client";

import Image from "next/image";
import styles from "./sidebar.module.scss";
import logo from "@/images/logo.png";
import { useEffect, useState } from "react";
import { getUserData } from "@/utils/getUserData";
import { SidebarLinks } from "../SidebarLinks";

export function Sidebar() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      getUserData()
        .then((currUser) => setUser(currUser))
        .catch((e) => console.log(e));
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
          <p className={styles.logo__info}>
            <span>Hello 👋</span>
            <span>{user}</span>
          </p>
        </div>
        <SidebarLinks />
      </div>
    </div>
  );
}
