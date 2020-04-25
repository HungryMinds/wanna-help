import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash/object";
import Link from "next/link";
import Router from "next/router";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";
import logout from "../utils/auth/logout";

const Index = (props) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, "AuthUser", null);
  const { favoriteFood } = data;

  return (
    <>
      {!AuthUser ? (
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      ) : (
        <div>
          <p>You're signed in. Email: {AuthUser.email}</p>
          <p
            style={{
              display: "inlinelock",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={async () => {
              try {
                await logout();
                Router.push("/auth");
              } catch (e) {
                console.error(e);
              }
            }}
          >
            Log out
          </p>
        </div>
      )}
      <header className="h-half w-full bg-gray-100 flex justify-center items-center flex-col">
        <div className=" w-40 flex justify-center items-center flex-col text-center">
          <h1 className="text-6xl mb-4">Getting ready to design</h1>
          <p className="text-2xl mb-3">
            After research, the designer must make sense of the data they've
            collected
          </p>
          <form className="sm:flex w-half justify-center mt-8 mb-4">
            <input
              type="email"
              required
              style={{ width: "100%" }}
              placeholder="Enter your email"
              className="block w-full px-4 py-3 text-base leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <button className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600">
              <span>Subscribe</span>
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                <svg className="h-8 w-8 spin" viewBox="0 0 24 24">
                  <path
                    className="text-gray-600"
                    fill="currentColor"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
                  ></path>
                  <path
                    className="text-gray-400"
                    fill="currentColor"
                    d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"
                  ></path>
                </svg>
              </span>
            </button>
          </form>
          <p className="w-30 text-tiny">
            Receive the Forpeople newsletter with the most popular content,
            platform updates and software guides
          </p>
        </div>
      </header>
      <div>
        <div className="px-2">
          <div className="py-12">
            <h3 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
              Owners
            </h3>
            <p className="text-center text-lg text-gray-700 mt-2 mb-10 px-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="flex justify-between container mx-auto">
              <div className="w-1/3 px-2">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1586365967509-c69bbaf69b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #winter
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <button
                      className="mt-3 text-lg font-semibold
    bg-black w-full text-white rounded-lg
    px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1586365967509-c69bbaf69b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #winter
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <button
                      className="mt-3 text-lg font-semibold
    bg-black w-full text-white rounded-lg
    px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1586365967509-c69bbaf69b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #winter
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <button
                      className="mt-3 text-lg font-semibold
    bg-black w-full text-white rounded-lg
    px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center my-8 py-10">
              <p className="w-half mb-6">
                A website wireframe, also known as a page schematic or screen
                blueprint, is a visual guide that represents the skeletal
                framework of a website. Wireframes are created for the purpose
                of arranging elements to best accomplish a particular purpose.
              </p>
              <button className="bg-transparent text-teal font-bold py-2 px-4 rounded">
                Action Link >
              </button>
            </div>
          </div>
          <section className="bg-gray-200 py-12">
            <div className="container max-w-full mx-auto py-10 px-6">
              <h3 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
                Pricing
              </h3>
              <p className="text-center text-lg text-gray-700 mt-2 px-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

              <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                <div className="relative block flex flex-col md:flex-row items-center">
                  <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                    <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                      <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                        <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                          Hobby
                        </h1>
                        <h2 className="text-sm text-gray-500 text-center pb-6">
                          FREE
                        </h2>
                        Stripe offers everything needed to run an online
                        business at scale. Get in touch for details.
                      </div>

                      <div className="flex flex-wrap mt-3 px-6">
                        <ul>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              No setup
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              No setups
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              Speed
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="block flex items-center p-8  uppercase">
                        <button
                          className="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                    <div className="text-sm leading-none rounded-t-lg bg-gray-800 text-white font-semibold uppercase py-4 text-center tracking-wide">
                      Most Popular
                    </div>
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        Expert
                      </h1>
                      <h2 className="text-sm text-gray-500 text-center pb-6">
                        <span className="text-3xl">€19</span> /mo
                      </h2>
                      Stripe offers everything needed to run an online business
                      at scale. Get in touch for details.
                    </div>
                    <div className="flex pl-12 justify-start sm:justify-start mt-3">
                      <ul>
                        <li className="flex items-center">
                          <div className="rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-6 h-6 align-middle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            No setup
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className=" rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-6 h-6 align-middle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            Hidden fees
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className=" rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-6 h-6 align-middle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            Original
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="block flex items-center p-8  uppercase">
                      <button
                        className="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                    <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                      <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                        <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                          Enteprise
                        </h1>
                        <h2 className="text-sm text-gray-500 text-center pb-6">
                          €39 /mo
                        </h2>
                        Stripe offers everything needed to run an online
                        business at scale. Get in touch for details.
                      </div>
                      <div className="flex flex-wrap mt-3 px-6">
                        <ul>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              Electric
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              Monthly
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className=" rounded-full p-2 fill-current text-green-700">
                              <svg
                                className="w-6 h-6 align-middle"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg ml-3">
                              No setup
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="block flex items-center p-8  uppercase">
                        <button
                          className="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

// Just an example.
const mockFetchData = async (userId) => ({
  user: {
    ...(userId && {
      id: userId,
    }),
  },
});

Index.getInitialProps = async (ctx) => {
  // Get the AuthUserInfo object. This is set in `withAuthUser.js`.
  // The AuthUserInfo object is available on both the server and client.
  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  const AuthUser = get(AuthUserInfo, "AuthUser", null);

  // You can also get the token (e.g., to authorize a request when fetching data)
  // const AuthUserToken = get(AuthUserInfo, 'token', null)

  // You can fetch data here.
  const data = await mockFetchData(get(AuthUser, "id"));

  return {
    data,
  };
};

Index.displayName = "Index";

Index.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

Index.defaultProps = {
  AuthUserInfo: null,
};

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index));
