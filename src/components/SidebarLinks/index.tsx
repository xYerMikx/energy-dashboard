"use client";

import { sidebarSections } from "@/constants/sidebarLinks";
import { Link } from "@/ui/Link";
import styles from "./links.module.scss";
import { getMessagesCount } from "@/utils/getMessagesCount";
import { useEffect, useState } from "react";

export function SidebarLinks() {
  const [messagesCount, setMessagesCount] = useState<number | null>(null);

  useEffect(() => {
    setMessagesCount(getMessagesCount());
  }, []);

  return (
    <div>
      {sidebarSections.map(({ id, name, links }) => (
        <div key={id}>
          <span className={styles.name}>{name}</span>
          <ul className={styles.links}>
            {links.map(({ icon, id: linkId, name, path }) => {
              return (
                <li key={linkId}>
                  <Link
                    icon={icon}
                    name={name}
                    path={path}
                    right={
                      linkId === "messages" && messagesCount
                        ? `(${messagesCount})`
                        : null
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
