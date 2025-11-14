import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import PlayButton from "../assets/play-button.png";
export default function Banner() {
  return (
    <>
      <div className="w-full h-[850px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
          <div className="flex flex-col space-x-5 items-baseline w-[50%]">
            <p className="text-white bg-gradient-to-r  from-red-600 to-red-300 py-2 px-3">
              TV Show
            </p>
            <div className="flex flex-col space-y-4 ">
              <h2 className="text-white text-[40px] ">Nghe nói em thích tôi</h2>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="" className="w-8 h-8" />
                <img src={IconRating} alt="" className="w-8 h-8" />
                <img src={IconRating} alt="" className="w-8 h-8" />
                <img src={IconRating} alt="" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="" className="w-8 h-8" />
              </div>
            </div>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              sunt laudantium, hic nulla quasi exercitationem repellat
              distinctio debitis dicta eos. Velit quia nihil beatae aut sint
              nesciunt dolorum possimus quidem. Ratione culpa voluptates
              suscipit totam eveniet officiis deserunt sed! Magni est,
              voluptates facilis perferendis ut culpa reprehenderit cum labore
              eaque nemo? Tenetur dolores et adipisci possimus odit voluptatum
              ut ipsam. Neque, mollitia consectetur repudiandae natus optio ab
              perferendis voluptatibus minus, explicabo libero, vel voluptatem
              excepturi ducimus totam. Ex, ea sunt eveniet accusantium odit
              temporibus sint. Unde non vero numquam quia. Cum unde eligendi
              aspernatur inventore quibusdam officiis est non, molestiae amet
            </p>
            <div className="flex items-center space-x-4 p-4">
              <button className="p-2 text-white bg-black font-bold text-lg">
                Chi Tiết
              </button>
              <button className="p-2 text-white bg-red-600 font-bold text-lg">
                Xem Phim
              </button>
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="w-[300px] h-[400px] relative group cursor-pointer">
              <img
                src={ImgTemp}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm">
                <img
                  src={PlayButton}
                  alt=""
                  className="w-16 h-16 relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
