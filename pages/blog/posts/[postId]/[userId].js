import { useRouter } from "next/router";

function UserPost() {
  const router = useRouter();
  const { postId, userId } = router.query;
  console.log(`postId: ${postId}, / userId: ${userId }`);
  return (
    <div>
      <h2>User Post</h2>
    </div>
  )
}

export default UserPost;