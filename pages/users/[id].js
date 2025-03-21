import { useRouter } from "next/router"; 

function UserId() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>UserID Page</h2>
    </div>
  )
}

export default UserId;