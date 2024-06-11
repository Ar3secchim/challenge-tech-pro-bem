import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-300 pr-4 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link href="/">Top artigos</Link>
            </li>
            <li>
              <summary>Categorias</summary>
              <ul className=" bg-base-200 rounded-t-none z-50">
                <li>
                  <Link href={`/categoryNotices/${encodeURI("technology")}`}>
                    Tecnologia
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("business")}`}>
                    Negócios
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("sports")}`}>
                    Esporte
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("science")}`}>
                    Ciências
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("entertainment")}`}>
                    Entretendimento
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("health")}`}>
                    Saúde
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <Link href={"/"} to="/" className="btn btn-ghost text-xl">
          Blog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Top artigos</Link>
          </li>

          <li>
            <details>
              <summary>Categorias</summary>
              <ul className=" bg-base-300 rounded-t-none z-50">
                <li>
                  <Link href={`/categoryNotices/${encodeURI("technology")}`}>
                    Tecnologia
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("business")}`}>
                    Negócios
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("sports")}`}>
                    Esporte
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("science")}`}>
                    Ciências
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("entertainment")}`}>
                    Entretendimento
                  </Link>
                </li>

                <li>
                  <Link href={`/categoryNotices/${encodeURI("health")}`}>
                    Saúde
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
