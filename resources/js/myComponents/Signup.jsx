import React from 'react'

function Signup() {
  return (
    <>
      <nav className="-mx-3 flex flex-1 justify-end">
        {auth.user ? (
          <Link
              href={route('dashboard')}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
              Dashboard
          </Link>
        ) : (
          <>
            <Link
                href={route('login')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white text-gree"
            >
                Log in
            </Link>
            <Link
                href={route('register')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Register
            </Link>
          </>
        )}
      </nav>
    </>
  )
}

export default Signup
