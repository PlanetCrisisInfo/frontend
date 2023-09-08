import type { Component, ThemeMode } from "@/types"

type Props = {
  themeMode: ThemeMode
}

const ServiceCard: Component<Props> = (props) => {
  const { themeMode = "neutral" } = props
  return (
    <article
      className={`overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ${themeMode}`}
    >
      <header>
        <figure className="hire w-[200px]">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z"></path>
          </svg> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="200"
            height="200"
          >
            {/* Define the path to be animated */}
            <path
              d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z"
              fill="red" // Initially transparent fill
              transform="rotate(0)"
              // Initial rotation of 0 degrees
            >
              {/* Define fill animation */}
              <animate
                attributeName="fill"
                from="red"
                to="blue"
                dur="2s"
                begin="click" // Change to "hover" or another event if needed
                fill="freeze" // Keep the final fill color after animation
              />

              {/* Define rotation animation */}
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="2s"
                begin="click" // Change to "hover" or another event if needed
                fill="freeze" // Keep the final rotation after animation
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                from="1"
                to="1.5"
                dur="2s"
                begin="click" // Change to "hover" or another event if needed
                fill="freeze" // Keep the final rotation after animation
              />
            </path>
          </svg>
        </figure>
      </header>

      <div className="p-6">
        <div className="flex gap-4 mb-4 justify-center">
          <h4 className="text-xl font-medium text-slate-700">
            In the urban Jungle
          </h4>
        </div>
        <p>
          Day to day life operates outside, so get ready to see the beach become
          the living room, and the street the kitchen. A simple, yet beautiful,
          way of life that explains the sunny outlook.
        </p>
      </div>
    </article>
  )
}

export default ServiceCard