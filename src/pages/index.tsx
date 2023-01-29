import { Button } from "@/components/Button/Button.component";
import { Chip } from "@/components/Chip/Chip.component";
import { Reminder } from "@/components/Reminder/Reminder.component";
import { TopBar } from "@/components/TopBar/TopBar.component";
import { useState } from "react";
import style from '../styles/Home.module.css';
import { useRouter } from "next/router";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState("completed");
  const router = useRouter();

  return (
    <>
      <TopBar />
      <div className={style.home}>
        <div>
        <div className={style.chips}>
          {["completed", "todo", "review"].map(x => <Chip count={45} isSelected={x == selectedChip} status={x} key={x} onClicked={() => setSelectedChip(x)}/>)}
        </div>
        <div className={style.reminders}>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        <Reminder title="Remind me for lunch" more="Lörem ipsum homohet dogon på valigt kanar.Ohet exorejutt i kana. ..." date="5th Jan 2023"/>
        </div>
        </div>
      </div>
      <div className={style.createbtn}>
        <Button text="create" type="create" onClick={() => router.push("/create")}></Button>
      </div>
    </>
  )
}
