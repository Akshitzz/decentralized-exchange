import { ProfileCard } from "../components/ProfileCard";
import db from "@/app/db";
function getBalance(){
  const session = await getServerSession();
  db.solWallet.findFirst({
    where:{
      userId:session.data?.user?.id
    }
  })
}

// app/dashboard/page.tsx
export default function Dashboard() {
return (
  <div>
    <ProfileCard/>
  </div>
)
}
  