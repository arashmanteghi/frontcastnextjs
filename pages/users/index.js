import Link from 'next/link'

function UsersPage() {

  const users = [
    { id: 1, username: 'Arash' },
    { id: 2, username: 'Admin' }
  ]

  return (
    <div>
      <h2>User Page</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
        {/* <li><Link href="/users/arash">Arash</Link></li>
        <li><Link href="/users/admin">Admin</Link></li> */}
      </ul>
    </div>
  )
}

export default UsersPage;