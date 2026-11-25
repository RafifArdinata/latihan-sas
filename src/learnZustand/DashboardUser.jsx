import React from 'react'
import useAuthStore from './Auth/store/useAuthStore';
function DashboardUser() {
    // const username = useAuthStore((state) => state.username);
    // const role = useAuthStore((state) => state.role);
    // const count = useAuthStore((state) => state.count);
    // const increment = useAuthStore((state) => state.increment);
    // const decrement = useAuthStore((state) => state.decrement);

    //*cara 2
    const { username, role, count, increment, decrement } = useAuthStore((state) => ({
        username: state.username,
        role: state.role,
        count: state.count,
        increment: state.increment,
        decrement: state.decrement,
      }));
  return (
    <>
        <div>DashboardUser</div>
      <p>Username: {username}</p>
      <p>Role: {role}</p>
      <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}


export default DashboardUser