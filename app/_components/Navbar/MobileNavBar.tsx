const NavAccordion = () => {
  const mobileNavLinks = [
    {
      parentLinkName: "cleanest",
      childLinks: [
        {
          name: "cleanest Home",
          path: "/cleanest",
        },
        {
          name: "cleanest Cities",
          path: "/cleanest/cities",
        },
      ],
    },
    {
      parentLinkName:"extint",
      childLinks:[  
        {
          name:"",
          path:"",
        
      },
      {
        name:"",
        path:"",
      
    },
    {
      name:"",
      path:"",
    
  }
      ]
    }
  ]
  console.log(mobileNavLinks)
  return (
    
    <>
      <li className="w-full divide-y divide-slate-200  ">
        <details className="group p-1" open>
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-emerald-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac05 desc-ac05"
            >
              <title id="title-ac05">Leading icon</title>
              <desc id="desc-ac05">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            How do I use Wind UI components?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac06 desc-ac06"
            >
              <title id="title-ac06">Open icon</title>
              <desc id="desc-ac06">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            All components can be copied and pasted and easily implemented in
            your tailwind css projects. You can choose which language you want
            to copy the desired component and just hover and click on the
            component you need and paste it on your project.
          </p>
        </details>
      </li>
    </>
  )
}

export default NavAccordion
