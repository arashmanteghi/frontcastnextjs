import { useRouter } from "next/router"; 

function UserId() {
  const router = useRouter();
  console.log(router);

  function showUserIdHandler() {
    // router.push('/users/arash');
    router.push({
      pathname: '/users/[id]',
      query: { id: 'arash' }
    });
  }
  return (
    <div>
      <h2>UserID Page</h2>
      <button onClick={showUserIdHandler}>Show User ID</button>
    </div>
  )
}

export default UserId;